const mainTemplates = require('./templates/mainTemplate');
const menuTemplates = require('./templates/menuTemplate');
const contentTemplates = require('./templates/contentTemplate');
const treeUtils = require('../utils/treeUtils');
const fileUtils = require('../utils/fileUtils');


function generateHtmlPage(menuNodes, sortedHtmlFragments) {
    return mainTemplates.htmlTemplateTypescript({
        menuIds: getMenuItemsIds(menuNodes),
        menu: menuTemplates.generateMenu(menuNodes),
        content:  contentTemplates.generateContent(sortedHtmlFragments)
    });
}


function getMenuItemsIds(menuNodes) {
    let flattedTree = [];
    menuNodes.forEach(node => {
        flattedTree = [...flattedTree, ...treeUtils.flatTree(node)];
    });

    return flattedTree
        .filter(item => item.type === fileUtils.TYPE_FILE)
        .map(item => item.metadata !== undefined ? item.metadata.menuAnchor : undefined)
}

module.exports.generateHtmlPage = generateHtmlPage;