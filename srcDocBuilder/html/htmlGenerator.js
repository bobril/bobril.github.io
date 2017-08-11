const mainTemplates = require('./templates/mainTemplate');
const menuTemplates = require('./templates/menuTemplate');
const contentTemplates = require('./templates/contentTemplate');


function generateHtmlPage(menuNodes, sortedHtmlFragments) {
    return mainTemplates.htmlTemplateTypescript({
        menu: menuTemplates.generateMenu(menuNodes),
        content:  contentTemplates.generateContent(sortedHtmlFragments)
    });
}

module.exports.generateHtmlPage = generateHtmlPage;