const md = require('./remarkable').md;
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const utils = require('./utils');

const argumentsDefinitions = [
    {name: 'srcDirectory', type: String},
    {name: 'outputFile', type: String}
];
const arguments = commandLineArgs(argumentsDefinitions);

console.log(`Generation of documentation has been started.`);
const readFilesResult = readFiles(arguments.srcDirectory);
readFilesResult
    .then((mdFilesContent) => {
        let filesList = utils.mapToList(mdFilesContent)
            .map((item) => {
                return {
                    name: item.key,
                    content: item.value
                }
            });

        let htmlParts = filesList
            .map(createMetaData)
            .map(convertContentMd2HTML);

        let sortedHtmlParts = sortByMetadata(htmlParts);
        let outputFile = generateHtmlPage(sortedHtmlParts);

        fs.writeFile(arguments.outputFile, outputFile, (err) => {
            if (err) {
                return console.log('Error occurred during documentation generation: ', err);
            }

            console.log(`Bobril documentation has been generated. It's available here: ${arguments.outputFile}`);
        });

    })
    .catch((error) => {
        console.log('Error occurred during the documentation build', error);
    });

function createMetaData(file) {
    const metaTagLineRaw = file.content.split('\n')[0];
    const metadata = parseMetaTagLine(file.name, metaTagLineRaw);
    return {
        metadata: Object.assign(metadata, {current: file.name}),
        content: file.content
    };
}

function parseMetaTagLine(fileName, line) {
    const metaTagRegex = /\[\/\/\]\:.*\<\>.*\(.*previous:(.*?);.*next:(.*\').*?/g;
    const match = metaTagRegex.exec(line);

    if (match === null) {
        throw Error(`Meta tag line cannot be parsed: ${fileName}`);
    }

    return {
        previous: match[1].trim().slice(1, -1),
        next: match[2].trim().slice(1, -1)
    }
}

function convertContentMd2HTML(file) {
    return Object.assign(file, {content: md.render(file.content)});
}

function readFiles(dirname) {
    let directoryContent = {};

    return new Promise((resolve, reject) => {
            fs.readdir(dirname, (err, filenames) => {
                if (err) {
                    reject(err);
                }

                filenames.forEach((filename) => {
                    const fileContent = fs.readFileSync(dirname + filename, 'utf-8');
                    if (fileContent) {
                        directoryContent[filename] = fileContent;
                    }
                });

                resolve(directoryContent);
            });
        }
    );
}

function sortByMetadata(linkedList) {
    let sortedList = [];
    let map = new Map();
    let currentId = null;

    for (let i = 0; i < linkedList.length; i++) {
        let item = linkedList[i];
        if (item.metadata.previous === '') {
            currentId = item.metadata.current;
            sortedList.push(item);
        } else {
            map.set(item.metadata.previous, i);
        }
    }

    while (sortedList.length < linkedList.length) {
        let nextItem = linkedList[map.get(currentId)];
        sortedList.push(nextItem);
        currentId = nextItem.metadata.current;
    }

    return sortedList;
}

function generateHtmlPage(sortedHtmlParts) {
    let output = `export const html =\``;
    for (let i = 0; i < sortedHtmlParts.length; i++) {
        output += `${sortedHtmlParts[i].content}`;
    }
    output += `\``;
    return output;
}