import * as fs from 'fs';
import * as path from 'path';

export const TYPE_UKNOWN = 'uknown';
export const TYPE_FILE = 'file';
export const TYPE_FOLDER = 'folder';

export interface IFileNode {
    type: string;
    content: string | undefined;
    path: string;
    name: string;
    children: IFileNode[] | undefined;
}

export function directoryTree(filename): IFileNode {
    const fileStats = fs.lstatSync(filename);
    const fileNode: IFileNode = {
        type: TYPE_UKNOWN,
        content: undefined,
        children: undefined,
        path: filename,
        name: path.basename(filename)
    };

    if (fileStats.isDirectory()) {
        fileNode.type = TYPE_FOLDER;
        fileNode.children = fs.readdirSync(filename).map((child) => directoryTree(filename + '/' + child));
    } else {
        fileNode.type = TYPE_FILE;
        fileNode.content = fs.readFileSync(fileNode.path, 'utf-8');
    }

    return fileNode;
}