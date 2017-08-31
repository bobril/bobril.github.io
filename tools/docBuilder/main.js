const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const commandLineArgs = require('command-line-args');
const md = require('./remarkable').md;
const utils = require('./utils/utils');
const html = require('./html/htmlGenerator');
const metadataTagParser = require('./metadata/metadataParser');
const fileUtils = require('./utils/fileUtils');
const treeUtils = require('./utils/treeUtils');

const supportedFileType = '.md';
const argumentsDefinitions = [
    {name: 'srcDirectory', type: String},
    {name: 'outputType', type: String},
    {name: 'outputDirectory', type: String}
];

// Commandline arguments
const commandLineArguments = getArguments();

const directoriesTreeRaw = fileUtils.directoryTree(commandLineArguments.srcDirectory);

const directoriesTreeFiltered = treeUtils.filterTree(directoriesTreeRaw, (node) => {
    return utils.isExtension(node.path, supportedFileType);
});

const directoriesTreeWithMetadata = treeUtils.mapTree(directoriesTreeFiltered, (node) => {
    return isFileTypeNode(node) ? Object.assign(node, {metadata: readMetadata(node)}) : node;
});

const directoriesTreeWithMetadataAndReadedSymlinkContent = treeUtils.mapTree(directoriesTreeFiltered, (node) => {
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

const directoriesTreeHtmlFragments = treeUtils.mapTree(directoriesTreeWithMetadataAndReadedSymlinkContent, (node) => {
    return isFileTypeNode(node) ? convertContentMd2HTML(node) : node;
});

const sortedHtmlFragmentsTreeByMetadata = sortTreeLevelsByMetadata(directoriesTreeHtmlFragments);

// TODO Multi level menu ordering
// TODO search directoryOrder file on each level, if there are any directories to sort
const menuOrderConfiguration = getMenuOrderConfiguration();
const sortedHtmlFragmentsTreeByMenuConfig = sortTreeLevelsByMenuConfig(sortedHtmlFragmentsTreeByMetadata, menuOrderConfiguration);

const flattedTreeToList = treeUtils.flatTree(sortedHtmlFragmentsTreeByMenuConfig);

// Remove root (/docs)
flattedTreeToList.slice(1, flattedTreeToList.length);
const generatedHtml = html.generateHtmlPage(
    sortedHtmlFragmentsTreeByMenuConfig.children,
    flattedTreeToList.filter((node) => isFileTypeNode(node))
);

writeOutputTypescript(generatedHtml);


function getArguments() {
    return commandLineArgs(argumentsDefinitions);
}

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

function readMetadata(file) {
    return metadataTagParser.parseMetadataTagLine(file.name, file.content);
}

function convertContentMd2HTML(file) {
    return Object.assign(
        file,
        {
            content: md.render(file.content)
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

function writeOutputTypescript(output) {

    if (!fs.existsSync(commandLineArguments.outputDirectory)) {
        fs.mkdirSync(commandLineArguments.outputDirectory)
    }

    copyJsResources();

    fs.writeFileSync(commandLineArguments.outputDirectory + '/page.ts', output, 'utf-8');
}

function copyJsResources() {
    fse.copySync(path.resolve(__dirname, './html/jsHelpers/helpers.js'), path.resolve(commandLineArguments.outputDirectory, 'helpers.js'));
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