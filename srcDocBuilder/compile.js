const fs = require('fs');
const commandLineArgs = require('command-line-args');
const md = require('./remarkable').md;
const utils = require('./utils');

const supportedFileType = '.md';

// Commandline arguments
const commandLineArguments = getArguments();

// Load all files from directory
console.log(`------- Generation of Bobril documentation ------`);
readDirectory(commandLineArguments.srcDirectory)
    .then((mdFilesContent) => {
        const htmlFragments = utils
            .mapToList(mdFilesContent)
            .map((item) => {
                return {
                    name: item.key,
                    content: item.value
                }
            })
            .filter((item) => utils.isExtension(item.name, supportedFileType))
            .map(addMetaData)
            .map(convertContentMd2HTML);

        const sortedHtmlFragments = sortByMetadata(htmlFragments);
        const outputFile = generateHtmlPage(sortedHtmlFragments);
        console.log(`HTML fragments successfully generated.`);

        fs.writeFile(commandLineArguments.outputFile, outputFile, (error) => {
            if (error) {
                throw new Error('Cannot write generated file due', error);
            }

            console.log(`SUCCESS: Documentation generated to '${commandLineArguments.outputFile}'`);
            console.log(`------- Generation of Bobril documentation succeed ------`);
        });

    })
    .catch((error) => {
        console.log('Error occurred during the documentation build', error);
    });

function getArguments() {
    const argumentsDefinitions = [
        {name: 'srcDirectory', type: String},
        {name: 'outputFile', type: String}
    ];
    return commandLineArgs(argumentsDefinitions);
}

function addMetaData(file) {
    const metaTagLineRaw = file.content.split('\n')[0];
    const metadata = parseMetaTagLine(file.name, metaTagLineRaw);

    return {
        metadata: Object.assign(metadata, {current: file.name}),
        content: file.content
    };
}

function parseMetaTagLine(fileName, line) {
    if (line === undefined) {
        throw new Error(`Meta tag line cannot be parsed. Line is not defined. Filename: ${fileName}`);
    }

    const metaTagRegex = /\[\/\/\]\:.*\<\>.*\(.*previous:(.*?);.*next:(.*\').*?/g;
    const match = metaTagRegex.exec(line);

    if (match === null) {
        throw Error(`Meta tag line cannot be parsed: ${fileName}`);
    }

    if (match.length !== 3) {
        throw Error(`Previous or next statement is not properly defined in file: ${fileName}`);
    }

    return {
        previous: match[1].trim().slice(1, -1), // remove ''
        next: match[2].trim().slice(1, -1) // remove ''
    }
}

function convertContentMd2HTML(file) {
    return Object.assign(file, {content: md.render(file.content)});
}

function readDirectory(dirName) {
    let directoryContent = {};

    return new Promise((resolve, reject) => {
            fs.readdir(dirName, (err, fileNames) => {
                if (err) {
                    reject(err);
                }

                fileNames.forEach((fileName) => {
                    const fileContent = fs.readFileSync(dirName + fileName, 'utf-8');
                    if (fileContent) {
                        directoryContent[fileName] = fileContent;
                    }
                });

                console.log(`Files red successfully.`);
                console.log(`Number of files: ${fileNames.length}`);
                resolve(directoryContent);
            });
        }
    );
}

function sortByMetadata(linkedList) {
    let sortedList = [];
    let map = {};
    let currentId = null;

    for (let i = 0; i < linkedList.length; i++) {
        let item = linkedList[i];
        if (item.metadata.previous === '') {
            currentId = item.metadata.current;
            sortedList.push(item);
        } else {
            map[item.metadata.previous] = i;
        }
    }

    while (sortedList.length < linkedList.length) {
        let nextItem = linkedList[map[currentId]];
        sortedList.push(nextItem);
        currentId = nextItem.metadata.current;
    }

    return sortedList;
}

function generateHtmlPage(sortedHtmlFragments) {
    let output = `export const html =\``;
    for (let i = 0; i < sortedHtmlFragments.length; i++) {
        output += `${sortedHtmlFragments[i].content}`;
    }
    output += `\``;
    return output;
}