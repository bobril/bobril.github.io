import * as commandLineUtils from './utils/commandLineUtils';
import * as fs from 'fs';
import * as path from 'path';
import * as utils from './utils/utils';
import * as fileUtils from './utils/fileUtils';
import * as treeUtils from './utils/treeUtils';
import * as remark from 'remark';
import remarkBobril = require('remark-bobril');
import * as jsYaml from 'js-yaml';
import * as bobril from './bobril/bobrilGenerator';
import {IMarkdownFileNode} from './data';
import {IFileNode} from './utils/fileUtils';

const supportedFileType = '.md';
const commandLineArguments = commandLineUtils.getCommandLineArguments();

// 1. Read files from disk to memory
const directoriesTreeRaw = fileUtils.directoryTree(commandLineArguments.srcDirectory);

// 2. Filter all not supported files
const directoriesTreeFiltered = treeUtils.filterTree(directoriesTreeRaw, (node) => {
    return utils.isExtension(node.path, supportedFileType);
});

// 3. Parse metadata from the beginning of the *.md file
const directoriesTreeWithMetadata = <IMarkdownFileNode>treeUtils.mapTree<IFileNode>(directoriesTreeFiltered, (node) => {
    return isFileTypeNode(node) ?
        Object.assign(
            {},
            node,
            {
                metadata: Object.assign(
                    jsYaml.safeLoad(getYamlSettings(node.content)).metadata,
                    {current: node.name}
                ),
                content: deleteYamlSettings(node.content)
            }
        )
        : node;
});

// 4. Load all symlinked content
const directoriesTreeWithMetadataAndReadedSymlinkContent = treeUtils.mapTree<IMarkdownFileNode>(
    directoriesTreeWithMetadata,
    (node) => {
        if (isFileTypeNode(node)) {
            if (node.metadata.symlink) {
                const resolvedSymlinkPath = path.resolve(node.path, node.metadata.symlink);
                let symlinkFileContent = fs.readFileSync(resolvedSymlinkPath, 'utf-8');
                symlinkFileContent = removeUnecessaryContent(symlinkFileContent);

                return Object.assign(node, {content: node.content + '\n' + symlinkFileContent})
            }
        }

        return node;
    });

// 5. Bobrilize content of the files
const directoriesTreeBobrilized = treeUtils.mapTree<IMarkdownFileNode>(directoriesTreeWithMetadataAndReadedSymlinkContent, (node) => {
    return isFileTypeNode(node) ? convertMdToBobril(node) : node;
});

// 6. Sort files by metadata order
const sortedHtmlFragmentsTreeByMetadata = sortTreeLevelsByMetadata(directoriesTreeBobrilized);

// // TODO Multi level menu ordering
// // TODO search directoryOrder file on each level, if there are any directories to sort
const menuOrderConfiguration = getMenuOrderConfiguration();
const sortedHtmlFragmentsTreeByMenuConfig = sortTreeLevelsByMenuConfig(sortedHtmlFragmentsTreeByMetadata, menuOrderConfiguration);

const flattedTreeToList = treeUtils.flatTree(sortedHtmlFragmentsTreeByMenuConfig);

// Remove root (/docs)
flattedTreeToList.slice(1, flattedTreeToList.length);

// 7. Generate Layout with menu and content
const generatedPage = bobril.generatePage(
    sortedHtmlFragmentsTreeByMenuConfig.children,
    flattedTreeToList.filter((node) => isFileTypeNode(node))
);

// 8. Write output to file
writeOutputTypescript(generatedPage);

/////////////////////////////////////////////////////////////////
/////////////////////// END OF GENERATION ///////////////////////
/////////////////////////////////////////////////////////////////

function getMenuOrderConfiguration() {
    return treeUtils.searchTree(
        directoriesTreeRaw,
        'directoryOrder',
        (value) => {
            return value.name
        })
        .content
        .split('\n')
        .map((row) => row.trim());
}

function convertMdToBobril(node) {
    const content = remark()
        .use(remarkBobril)
        .processSync(node.content).contents;

    return Object.assign(
        node,
        {
            content: JSON.stringify(content),
        }
    );
}

function sortTreeLevelsByMenuConfig(node, menuConfig) {
    let sortedChildren = [];
    let unsortedChildren = [...node.children];
    let i = 0;
    while (sortedChildren.length < unsortedChildren.length) {
        let sorter = menuConfig[i];
        for (let j = 0; j < unsortedChildren.length; j++) {
            if (sorter === unsortedChildren[j].name) {
                sortedChildren.push(unsortedChildren[j]);
                break;
            }
        }
        i++;
    }

    return Object.assign(node, {children: sortedChildren});
}

function sortTreeLevelsByMetadata(node) {
    if (node.children !== undefined && node.children.length !== 0) {
        let nodesToInvestigate = [...node.children].filter((node) => isFolderTypeNode(node));
        let investigatedNodes = [];
        nodesToInvestigate.forEach((nn) => {
            investigatedNodes.push(sortTreeLevelsByMetadata(nn));
        });

        let nodesToSort = sortByMetadata([...node.children].filter((node) => isFileTypeNode(node)));

        return Object.assign(node, {children: [...investigatedNodes, ...nodesToSort]});
    }

    return node;
}

function sortByMetadata(linkedList) {
    let sortedList = [];
    let map = {};
    let currentId = null;

    for (let i = 0; i < linkedList.length; i++) {
        let item = linkedList[i];
        if (item.metadata.previous === '') {
            currentId = item.metadata.current;
            sortedList.push(item);
        } else {
            map[item.metadata.previous] = i;
        }
    }

    while (sortedList.length < linkedList.length) {
        let nextItem = linkedList[map[currentId]];
        sortedList.push(nextItem);
        currentId = nextItem.metadata.current;
    }

    return sortedList;
}

function isFileTypeNode(node) {
    return node.type === fileUtils.TYPE_FILE;
}

function isFolderTypeNode(node) {
    return node.type === fileUtils.TYPE_FOLDER;
}

function writeOutputTypescript(output: string) {
    if (!fs.existsSync(commandLineArguments.outputDirectory)) {
        fs.mkdirSync(commandLineArguments.outputDirectory)
    }

    fs.writeFileSync(commandLineArguments.outputDirectory + '/page.ts', output, 'utf-8');
}

function getYamlSettings(content: string): string {
    let rows = content.split('\n');
    const startPattern = '---';
    const endPattern = '---';

    let outputContent = [];
    let include = false;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].indexOf(startPattern) !== -1 && !include) {
            include = true;
            continue;
        }

        if (rows[i].indexOf(endPattern) !== -1 && include) {
            return outputContent.join('\n');
        }

        if (include) {
            outputContent.push(rows[i]);
        }
    }

    if (include) {
        throw Error('Invalid yaml configuration. No end tag.');
    }
}

function deleteYamlSettings(content: string): string {
    let rows = content.split('\n');
    const pattern = '---';

    let numFounded = 0;
    let paired = false;
    let i = 0;
    while (!paired) {
        if (rows[i].indexOf(pattern) !== -1) {
            numFounded++;
            if (numFounded > 1) {
                paired = true;
            }
        }

        i++;
    }

    const newContent = [...rows];
    newContent.splice(0, i);

    return newContent.join('\n');
}


function removeUnecessaryContent(content) {
    let rows = content.split('\n');
    const startPatternA = '[//]: <> (bobrilComIgnoreStart)';
    const startPatternB = '[//]: # (bobrilComIgnoreStart)';
    const endPatternA = '[//]: <> (bobrilComIgnoreEnd)';
    const endPatternB = '[//]: # (bobrilComIgnoreEnd)';

    let outputContent = [];
    let include = true;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].indexOf(startPatternA) !== -1 || rows[i].indexOf(startPatternB) !== -1) {
            include = false;
            continue;
        }

        if (rows[i].indexOf(endPatternA) !== -1 || rows[i].indexOf(endPatternB) !== -1) {
            include = true;
            continue;
        }

        if (include) {
            outputContent.push(rows[i]);
        }
    }
    return outputContent.join('\n');
}