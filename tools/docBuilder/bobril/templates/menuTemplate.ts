import * as colors from '../../../../src/components/colors';
import { flatTree } from '../../utils/treeUtils';
import * as fileUtils from '../../utils/fileUtils';

export function generateMenu(nodes): string {
    const menuAnchors = getMenuAnchors(nodes);
    const output = [];

    nodes.forEach(node => output.push(generateMenuFromNode(node, menuAnchors)));

    return output.join(',');
}

function generateMenuFromNode(node, menuAnchors: string[]): string {
    if (node.children !== undefined && node.children.length > 0) {
        const childrenContent = [];

        for (let i = 1; i < node.children.length; i++) {
            childrenContent.push(
                generateMenuFromNode(node.children[i], menuAnchors)
            );
        }

        const firstChildrenMetadata = node.children[0].metadata;

        return `
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                component: {
                    init: (ctx) => {
                        ctx.activeMenuAnchor =  ${JSON.stringify(menuAnchors[0])};
                    },
                    
                    postInitDom(ctx) {
                        const menuAnchors = ${JSON.stringify(menuAnchors)};
                        const menuAnchorsBoundary = viewportUtils.getBoundariesForHtmlElements(menuAnchors);
                
                        function findActiveAnchor() {
                            ctx.activeMenuAnchor = menuAnchors[menuAnchorsBoundary.findIndex((boundary) =>
                                 viewportUtils.isInBoundaries(b.getWindowScroll()[1] + 75, boundary)
                            )];
                            b.invalidate(ctx);
                        }
                            
                        b.addOnScroll(() => {
                            findActiveAnchor();
                        });
                        
                        findActiveAnchor();
                    },
                    
                    render(ctx, me) {
                       const activeAnchor = ctx.activeMenuAnchor;
                       
                       me.children = [
                            ${generateMenuItem({
                                tagClass: '"menu-block-header"',
                                listStyle: 'none',
                                menuAnchor: firstChildrenMetadata.menuAnchor,
                                label: firstChildrenMetadata.menuLabel,
                                color: colors.color04,
                                moveLeftUnit: 20,
                                captialize: true,
                                shouldMoveLeft: true,
                                fontSize: 15,
                                lineHeight: 18
                            })},
                            {
                                tag: 'div',
                                className: 'menu-sub-block',
                                style: {
                                    paddingLeft: 24
                                },
                                children: [
                                    ${childrenContent.join(',')}
                                ]
                            }
                        ] 
                    }                   
                }
            }`;
    }

    const metadata = node.metadata;

    return generateMenuItem({
        tagClass: "'menu-sub-block-item'",
        menuAnchor: metadata.menuAnchor,
        listStyle: 'disc',
        moveLeftUnit: 0,
        captialize: false,
        shouldMoveLeft: false,
        label: metadata.menuLabel,
        color: '#949aa9',
        fontSize: 15,
        lineHeight: 15
    });
}

function generateMenuItem(menuItemCfg) {
    return `
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: ${menuItemCfg.tagClass},
                children: '${menuItemCfg.label}',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '${menuItemCfg.fontSize}px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        let e = document.getElementById('${
                            menuItemCfg.menuAnchor
                        }');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', '${
                                menuItemCfg.menuAnchor
                            }');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === ${JSON.stringify(
                    menuItemCfg.menuAnchor
                )} ? \'#ffffff\' : '${menuItemCfg.color}',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: '${menuItemCfg.captialize && 'uppercase'}',
                marginLeft: ${menuItemCfg.shouldMoveLeft &&
                    menuItemCfg.moveLeftUnit},
                listStyle:  '${menuItemCfg.listStyle}',
                lineHeight: '${menuItemCfg.lineHeight}px'
            }
        }
    `;
}

function isFileTypeNode(node) {
    return node.type === fileUtils.TYPE_FILE;
}

function getMenuAnchors(nodes) {
    const nodesFlattened = [];
    
    nodes.forEach((node, i) => {
        nodesFlattened.push(flatTree(nodes[i]));
    });

    return nodesFlattened
        .map(item =>
            item
                .filter(node => isFileTypeNode(node))
                .map(item => item.metadata.menuAnchor)
        )
        .reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}
