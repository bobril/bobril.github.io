import {IFileNode} from './utils/fileUtils';

export interface IMetadata {
    menuLabel: string;
    menuAnchor: string;
    previous: string;
    next: string;
    symlink?: string;
}

export interface IMarkdownFileNode extends IFileNode {
    metadata: IMetadata;
}