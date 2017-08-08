const fileUtils = require('./fileUtils');

function searchTree(node, property, propertyGetter) {


    if (node.children !== undefined && node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
            let potentialFound = searchTree(node.children[i], property, propertyGetter);
            if (potentialFound !== undefined) {
                return potentialFound;
            }
        }
    }

    if (property === propertyGetter(node)) {
        return node;
    }

    return undefined;

}

function filterTree(node, filterCondition) {
    let mappedChildren = [];

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            let filteredTree = filterTree(nn, filterCondition);
            if (filteredTree !== undefined) {
                mappedChildren.push(filteredTree);
            }
        });
        return Object.assign(node, {children: mappedChildren});
    }

    if (node.type === fileUtils.TYPE_FILE && !filterCondition(node)) {
        return undefined;
    }

    return node;
}

function mapTree(node, mapFunction) {
    let mappedChildren = [];

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            mappedChildren.push(mapTree(nn, mapFunction));
        });
        return Object.assign(mapFunction(node), {children: mappedChildren});
    }


    return mapFunction(node);
}

function flatTree(node) {
    let mappedChildren = [];

    const resultNode = {
        path: node.path,
        name: node.name,
        type: node.type,
        metadata: node.metadata,
        content: node.content
    };

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            mappedChildren.push(...flatTree(nn));
        });
        return [resultNode, ...mappedChildren];
    }


    return [resultNode];
}

module.exports.searchTree = searchTree;
module.exports.filterTree = filterTree;
module.exports.mapTree = mapTree;
module.exports.flatTree = flatTree;