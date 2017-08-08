const fs = require('fs');
const commandLineArgs = require('command-line-args');
const md = require('./remarkable').md;
const utils = require('./utils');
const html = require('./htmlGenerator');
const metadataTagParser = require('./metadataTagLineParser');
const fileUtils = require('./fileUtils');
const treeUtils = require('./treeUtils');

const supportedFileType = '.md';

// Commandline arguments
const commandLineArguments = getArguments();

const directoryMirror = fileUtils.directoryTree(commandLineArguments.srcDirectory);

const menuOrderConfRaw = treeUtils.searchTree(
    directoryMirror,
    'order.conf',
    (value) => {
        return value.name
    })
    .content.split('\n');
const menuOrderCon = menuOrderConfRaw.map((row) => {
    return row.trim()
});

const directoryFiltered = treeUtils.filterTree(directoryMirror, (node) => {
    return utils.isExtension(node.path, supportedFileType);
});

const directoriesWithMetadata = treeUtils.mapTree(directoryFiltered, (node) => {
    if (node.type === fileUtils.TYPE_FILE) {
        return Object.assign(node, {metadata: readMetadata(node)});
    }
    return node;
});

const directoriesHtmlFragments = treeUtils.mapTree(directoriesWithMetadata, (node) => {
    if (node.type === fileUtils.TYPE_FILE) {
        return convertContentMd2HTML(node);
    }
    return node;
});

const sortedHtmlFragmentsByMetadata = sortTreeLevelsByMetadata(directoriesHtmlFragments);
// TODO Multi level menu ordering
const sortedHtmlFragmentsByMenuConfig = sortTreeLevelsByMenuConfig(sortedHtmlFragmentsByMetadata, menuOrderCon);

const flattedTreeToList = treeUtils.flatTree(sortedHtmlFragmentsByMenuConfig);

flattedTreeToList.slice(1, flattedTreeToList.length); // remove root (/docs)
const generatedHtml = html.generateHtmlPage(
    sortedHtmlFragmentsByMenuConfig.children,
    flattedTreeToList.filter((node) => node.type === fileUtils.TYPE_FILE)
);

fs.writeFileSync(commandLineArguments.outputFile, generatedHtml, 'utf-8');


function getArguments() {
    const argumentsDefinitions = [
        {name: 'srcDirectory', type: String},
        {name: 'outputFile', type: String}
    ];
    return commandLineArgs(argumentsDefinitions);
}

function readMetadata(file) {
    return metadataTagParser.parseMetadataTagLine(file.name, file.content);
}

function convertContentMd2HTML(file) {
    return Object.assign(file, {content: md.render(file.content)});
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
        i++
    }

    return Object.assign(node, {children: sortedChildren});
}

function sortTreeLevelsByMetadata(node) {
    if (node.children !== undefined && node.children.length !== 0) {
        let nodesToInvestigate = [...node.children].filter((node) => node.type === fileUtils.TYPE_FOLDER);
        let investigatedNodes = [];
        nodesToInvestigate.forEach((nn) => {
            investigatedNodes.push(sortTreeLevelsByMetadata(nn));
        });

        let nodesToSort = sortByMetadata([...node.children].filter((node) => node.type === fileUtils.TYPE_FILE));

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

