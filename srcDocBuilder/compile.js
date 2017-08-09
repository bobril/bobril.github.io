const fs = require('fs');
const commandLineArgs = require('command-line-args');
const md = require('./remarkable').md;
const utils = require('./utils');
const html = require('./htmlGenerator');
const metadataTagParser = require('./metadataTagLineParser');
const fileUtils = require('./fileUtils');
const treeUtils = require('./treeUtils');

const supportedFileType = '.md';
const argumentsDefinitions = [
    {name: 'srcDirectory', type: String},
    {name: 'outputFile', type: String}
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

const directoriesTreeHtmlFragments = treeUtils.mapTree(directoriesTreeWithMetadata, (node) => {
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

fs.writeFileSync(commandLineArguments.outputFile, generatedHtml, 'utf-8');


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