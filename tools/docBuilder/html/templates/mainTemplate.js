const fs = require('fs');
const generateJsHelpers = require('./js/helpers').generateJsHelpers;

const menuWidth = 190;
const cssFiles = [
    'base.css',
    'mainTemplate.css',
    'menuTemplate.css',
    'contentTemplate.css'
];

function htmlTemplateTypescript(parts) {
    return {
        html: `
export const html =\`
    <style>${getCssStyles()}</style>
    <div class="markdown">
        <div class='doc-menu' 
            style='width: ${menuWidth}px'>
            ${parts.menu}
        </div>
        <div class='doc-content markdown-body'
             style='margin-left: ${menuWidth + 16}px'>
            ${escapeContent(parts.content)}
        </div>
    </div>
    \`
    `,
        js: `${generateJsHelpers(parts.menuIds)}`
    };
}

function getCssStyles() {
    const cssDirPath = `${__dirname}/css`;

    let cssResult = [];
    for (let i = 0; i < cssFiles.length; i++) {
        cssResult.push(fs.readFileSync(`${cssDirPath}/${cssFiles[i]}`, 'utf-8'))
    }

    return cssResult.join('');
}

function escapeContent(content) {
    return content
        .split('`').join('\\`')
        .split('$').join('\\$');
}

module.exports.htmlTemplateTypescript = htmlTemplateTypescript;
