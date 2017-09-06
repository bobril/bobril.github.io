import * as fileUtils from './fileUtils';
import {IFileNode} from './fileUtils';

export function searchTree<T extends IFileNode, P>(node: T,
                                                   property: P,
                                                   propertyGetter: (n: T) => P): T | undefined {
    if (node.children !== undefined && node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
            let potentialFound = searchTree(node.children[i], property, propertyGetter);
            if (potentialFound !== undefined) {
                return <T>potentialFound;
            }
        }
    }

    if (property === propertyGetter(node)) {
        return node;
    }

    return undefined;
}

export function filterTree<T extends IFileNode>(node: T,
                                                filterCondition: (n: T) => boolean): T {
    let mappedChildren = [];

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            let filteredTree = filterTree(nn, filterCondition);
            if (filteredTree !== undefined) {
                mappedChildren.push(filteredTree);
            }
        });
        return Object.assign({}, node, {children: mappedChildren});
    }

    if (node.type === fileUtils.TYPE_FILE && !filterCondition(node)) {
        return undefined;
    }

    return Object.assign({}, node);
}

export function mapTree<T extends IFileNode>(node: T,
                                             mapFunction: (n: T) => T): T {
    let mappedChildren = [];

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            mappedChildren.push(mapTree(nn, mapFunction));
        });
        return Object.assign({}, mapFunction(node), {children: mappedChildren});
    }

    return mapFunction(node);
}

export function flatTree<T extends IFileNode>(node: T): T[] {
    let mappedChildren = [];

    const resultNode = Object.assign({}, node);

    if (node.children !== undefined && node.children.length !== 0) {
        node.children.forEach((nn) => {
            mappedChildren.push(...flatTree(nn));
        });
        return [resultNode, ...mappedChildren];
    }

    return [resultNode];
}

