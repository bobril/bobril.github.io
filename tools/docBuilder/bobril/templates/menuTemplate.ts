export function generateMenu(nodes): string {
    const output = [];
    nodes.forEach((node) => {
        output.push(generateMenuFromNode(node));
    });
    return output.join(',');
}

function generateMenuFromNode(node): string {
    if (node.children !== undefined && node.children.length > 0) {

        const childrenContent = [];
        for (let i = 1; i < node.children.length; i++) {
            childrenContent.push(generateMenuFromNode(node.children[i]));
        }

        const firstChildrenMetadata = node.children[0].metadata;

        return `
            {
                tag: 'ul',
                className: 'menu-block',
                style : {
                    paddingLeft: 16    
                },
                children: [
                    ${generateMenuItem(
                    {
                                tagClass: '\'menu-block-header\'',
                                menuAnchor: firstChildrenMetadata.menuAnchor,
                                label: firstChildrenMetadata.menuLabel,
                                color: '#0097a7',
                                fontSize: 18,
                                lineHeight: 18
                            }
                        )
                    },
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        style: {
                            paddingLeft: 16
                        },
                        children: [
                            ${childrenContent.join(',')}
                        ]
                    }
                ] 
            }`;
    }

    let metadata = node.metadata;

    return generateMenuItem({
        tagClass: '\'menu-sub-block-item\'',
        menuAnchor: metadata.menuAnchor,
        label: metadata.menuLabel,
        color: 'rgba(0,0,0,0.870)',
        fontSize: 15,
        lineHeight: 15
    });
}

function generateMenuItem(menuItemCfg) {
    return `
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: ${menuItemCfg.tagClass},
                children: '${menuItemCfg.label}',
                style : {
                    textDecoration: 'none',
                    color: '${menuItemCfg.color}',
                    fontSize: '${menuItemCfg.fontSize}px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('${menuItemCfg.menuAnchor}');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', '${menuItemCfg.menuAnchor}');
                            return;
                        }
            
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                listStyle: 'none',
                lineHeight: '${menuItemCfg.lineHeight}px'
            }
        }
    `;
}

