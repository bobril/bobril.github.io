function generateMenu(nodes) {
    let output = '';
    nodes.forEach((node) => {
        output += generateMenuFromNode(node);
    });
    return output;
}

function generateMenuFromNode(node) {
    if (node.children !== undefined && node.children.length > 0) {
        let output = `<ul class="menu-block">
            <li>
                <a 
                   class="menu-block-header"
                   href='#${node.children[0].metadata.menuAnchor}'>
                        ${node.children[0].metadata.label}
                </a>
            </li>
            <ul class="menu-sub-block">
        `;
        for (let i = 1; i < node.children.length; i++) {
            output += `${generateMenuFromNode(node.children[i])}`;
        }
        output += `</ul></ul>`;
        return output;
    }

    return `
        <li>
            <a 
               class="menu-sub-block-item"
               href='#${node.metadata.menuAnchor}'>
                    ${node.metadata.label}
            </a>
        </li>`;
}

module.exports.generateMenu = generateMenu;