const menuWidth = 170;
function generateHtmlPage(sortedHtmlFragments) {
    return `
export const html =\`
    <div class='doc-menu' style='float: left; width: ${menuWidth}px'>
        ${generateMenu(sortedHtmlFragments)}
    </div>
    <div class='doc-content'
         style='padding-left: 16px; border-left: 1px solid #bdbdbd; margin-left: ${menuWidth + 16}px'>
        ${generateContent(sortedHtmlFragments)}
    </div>
    \`
`;
}


function generateMenu(sortedHtmlFragments) {
    return `
        <ul style='margin: 0; padding: 0'>
            ${sortedHtmlFragments.reduce((output, item) => {
        return output + `
                    <li>
                        <a 
                           style='text-decoration: none; color: rgba(0,0,0,0.870)'  
                           onMouseOver="this.style.color='rgb(0, 188, 212)'"
                           onMouseOut="this.style.color='#000'" 
                           href='#${item.metadata.menuAnchor}'>
                                ${item.metadata.label}
                        </a>
                    </li>`
    }, '')}
        </ul>
    `;
}

function generateContent(sortedHtmlFragments) {
    let output = '';
    for (let i = 0; i < sortedHtmlFragments.length; i++) {
        output += `${sortedHtmlFragments[i].content}`;
    }
    return output;
}

module.exports.generateHtmlPage = generateHtmlPage;