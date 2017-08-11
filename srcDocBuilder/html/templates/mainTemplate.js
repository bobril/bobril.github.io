const fs = require('fs');

const menuWidth = 190;
const cssFiles = [
    'base.css',
    'mainTemplate.css',
    'menuTemplate.css'
];

function htmlTemplateTypescript(parts) {
    return `
export const html =\`
    <style>${getCssStyles()}</style>
    <div class="markdown">
        <div class='doc-menu' 
            style='width: ${menuWidth}px'>
            ${parts.menu}
        </div>
        <div class='doc-content'
             style='margin-left: ${menuWidth + 16}px'>
            ${parts.content}
        </div>
    </div>
    \`
`
}

function getCssStyles() {
    const cssDirPath = `${__dirname}/css`;

    let cssResult = [];
    for (let i = 0; i < cssFiles.length; i++) {
        cssResult.push(fs.readFileSync(`${cssDirPath}/${cssFiles[i]}`, 'utf-8'))
    }

    return cssResult.join('');
}

module.exports.htmlTemplateTypescript = htmlTemplateTypescript;
