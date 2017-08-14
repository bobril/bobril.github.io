function parseMetaTagLine(fileName, fileContent) {
    let lines = fileContent.split('\n');

    const menuLabelRegex = /\[\/\/\]\:.*\<\>.*\(menuLabel:(.*\').*?/g;
    const menuAnchorRegex = /\[\/\/\]\:.*\<\>.*\(menuAnchor:(.*\').*?/g;
    const navigationRegex = /\[\/\/\]\:.*\<\>.*\(previous:(.*);.*next:(.*\').*?/g;
    const symlinkRegex = /\[\/\/\]\:.*\<\>.*\(symlink:(.*\').*?/g;

    if (lines === undefined) {
        throw new Error(`Meta tag line cannot be parsed. Line is not defined. Filename: ${fileName}`);
    }

    let matchLabel = null;
    let matchAnchor = null;
    let matchNavigation = null;
    let matchSymlink = null;

    if (lines.length > 3) {
        matchLabel = menuLabelRegex.exec(lines[1]);
        matchAnchor = menuAnchorRegex.exec(lines[2]);
        matchNavigation = navigationRegex.exec(lines[3]);

        if (lines.length > 4) {
            matchSymlink = symlinkRegex.exec(lines[4]);
        }
    } else {
        throw new Error(`Meta tag line cannot be parsed. Configuration is not defined properly. Filename: ${fileName}`);
    }

    if (matchLabel === null || matchAnchor === null || matchNavigation === null) {
        throw Error(`Meta tag line cannot be parsed: ${fileName}`);
    }

    if (matchLabel.length !== 2
        || matchAnchor.length !== 2
        || matchNavigation.length !== 3
        || (matchSymlink !== null && matchSymlink.length !== 2)) {
        throw Error(`Previous or next statement is not properly defined in file: ${fileName}`);
    }

    return {
        current: fileName,
        label: matchLabel[1].trim().slice(1, -1), // remove ''
        menuAnchor: matchAnchor[1].trim().slice(1, -1), // remove ''
        previous: matchNavigation[1].trim().slice(1, -1), // remove ''
        next: matchNavigation[2].trim().slice(1, -1), // remove ''
        symlink: matchSymlink !== null
            ? matchSymlink[1].trim().slice(1, -1) // remove ''
            : undefined
}
}


module.exports.parseMetadataTagLine = parseMetaTagLine;