const fs = require('fs');
const path = require('path');

const TYPE_FILE = 'file';
const TYPE_FOLDER = 'folder';

function directoryTree(filename) {
    const stats = fs.lstatSync(filename);
    const info = {
        path: filename,
        name: path.basename(filename)
    };

    if (stats.isDirectory()) {
        info.type = TYPE_FOLDER;
        info.children = fs.readdirSync(filename).map((child) => directoryTree(filename + '/' + child));
    } else {
        info.type = TYPE_FILE;
        info.content = fs.readFileSync(info.path, 'utf-8');
    }

    return info;
}

module.exports.directoryTree = directoryTree;
module.exports.TYPE_FILE = TYPE_FILE;
module.exports.TYPE_FOLDER = TYPE_FOLDER;