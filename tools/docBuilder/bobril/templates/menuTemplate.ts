export function generateMenu(nodes): string {
    let output = [];
    nodes.forEach((node) => {
        output.push(generateMenuFromNode(node));
    });
    return output.join(',');
}

function generateMenuFromNode(node): string {
    if (node.children !== undefined && node.children.length > 0) {

        let childrenContent = [];
        for (let i = 1; i < node.children.length; i++) {
            childrenContent.push(generateMenuFromNode(node.children[i]));
        }

        return `
            {
                tag: 'ul',
                className: 'menu-block',
                children: [
                    ${generateMenuItem(
            {
                tagClass: '\'menu-block-header\'',
                menuAnchor: node.children[0].metadata.menuAnchor,
                label: node.children[0].metadata.menuLabel
            })},
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        children: [
                            ${childrenContent.join(',')}
                        ]
                    }
                ] 
            }`;
    }

    return generateMenuItem({
        tagClass: '\'menu-sub-block-item\'',
        menuAnchor: node.metadata.menuAnchor,
        label: node.metadata.menuLabel
    });
}

function generateMenuItem(menuItemCfg) {
    return `
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: ${menuItemCfg.tagClass},
                children: '${menuItemCfg.label}'
            }
        }
    `;
}

