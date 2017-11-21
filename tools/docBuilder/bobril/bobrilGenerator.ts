import * as mainTemplate from './templates/mainTemplate';
import * as menuTemplate from './templates/menuTemplate';
import * as contentTemplate from './templates/contentTemplate';
import {IMarkdownFileNode} from '../data';

export function generatePage(fileNodes: IMarkdownFileNode[], flattedNodes: IMarkdownFileNode[]) {
    return mainTemplate.generateMainPage({
        menu: menuTemplate.generateMenu(fileNodes),
        content:  contentTemplate.generateContent(flattedNodes)
        
    });
}