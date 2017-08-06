const md = require('./remarkable').md;
const fs = require('fs');
const commandLineArgs = require('command-line-args');

const argumentsDefinitions = [
    {name: 'srcDirectory', type: String},
    {name: 'outputFile', type: String}
];
const arguments = commandLineArgs(argumentsDefinitions);

console.log(`Generation of documentation has been started.`);
const readFilesResult = readDirectoryContent(arguments.srcDirectory);
readFilesResult
    .then((mdFilesContent) => {
        console.log(`Documentation files (*.md) loaded.`);

        let htmlFilesContent = convertMd2Html(mdFilesContent);
        console.log(`Files *.md has been converted to *.html in memory.`);

        let outputFile = generateHtmlPage(htmlFilesContent);
        console.log(`Final HTML has been created from html parts.`);

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

function convertMd2Html(filesContent) {
    let htmlFileContent = {};
    for (let fileName in filesContent) {
        if (filesContent.hasOwnProperty(fileName)) {
            htmlFileContent[fileName] = md.render(filesContent[fileName]);
        }
    }
    return htmlFileContent;
}

function readDirectoryContent(dirname) {
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

function generateHtmlPage(filesContent) {
    let output = `export const html =\``;
    for (let fileName in filesContent) {
        if (filesContent.hasOwnProperty(fileName)) {
            output += `${filesContent[fileName]}`;
        }
    }
    output += `\``;
    return output;
}