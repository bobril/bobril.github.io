import {IMarkdownFileNode} from '../../data';

export function generateContent(bobrilContentNodes: IMarkdownFileNode[]): string {
    let output = [];
    for (let i = 0; i < bobrilContentNodes.length; i++) {
        output.push(`${bobrilContentNodes[i].content}`);
    }

    return output.join(',');
}