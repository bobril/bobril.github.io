function generateMenu(nodes) {
    let output = [];
    nodes.forEach((node) => {
        output.push(generateMenuFromNode(node));
    });
    return output.join('');
}

function generateMenuFromNode(node) {
    if (node.children !== undefined && node.children.length > 0) {
        let output = [
            `<ul class='menu-block'>
                ${generateMenuItem({
                tagClass: 'menu-block-header',
                menuAnchor: node.children[0].metadata.menuAnchor,
                label: node.children[0].metadata.label
            })}
                <ul class='menu-sub-block'>`];
        for (let i = 1; i < node.children.length; i++) {
            output.push(generateMenuFromNode(node.children[i]));
        }
        output.push(`
                </ul>
            </ul>`);
        return output.join('');
    }

    return generateMenuItem({
        tagClass: 'menu-sub-block-item',
        menuAnchor: node.metadata.menuAnchor,
        label: node.metadata.label
    });
}

function generateMenuItem(menuItemCfg) {
    return `
        <li>
            <a 
               class='${menuItemCfg.tagClass}'
               onclick='(function (id) { 
                        var e = document.getElementById(id);
                        if (e === undefined || e === null) {
                            console.warn("Cannot find element with id:", id);
                            return;
                        }
            
                        var offsetTop = e.offsetTop - 60;
                        console.log(offsetTop);
                        window.scrollTo(0, offsetTop);
                    })("${menuItemCfg.menuAnchor}")'>
                    ${menuItemCfg.label}
            </a>
        </li>
    `;
}


module.exports.generateMenu = generateMenu;