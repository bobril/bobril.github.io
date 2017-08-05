const md = require('./remarkable').md;
const fs = require('fs');


// TODO insert path to DOC DIRECTORY as a PARAM!!!
const docDirectoryPath = './doc/';

const readFilesResult = readDirectoryContent(docDirectoryPath);
readFilesResult
    .then((mdFilesContent) => {
        let htmlFilesContent = convertMd2Html(mdFilesContent);
        let outputFile = generateHtmlPage(htmlFilesContent);

        // TODO insert output path as a PARAM!!!
        fs.writeFile('./doc.html', outputFile, (err) => {
            if (err) {
                return console.log(err);
            }


            console.log('Bobril documentation has been generated!');
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
    // TODO insert path to CSS as a PARAM!!!
    let cssStyles = fs.readFileSync('./srcDocBuilder/style.css', 'utf-8');
    let output = `
                    <html>
                        <head>
                            <base target="_parent">
                            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                            <style>${cssStyles}</style>
                        </head>
                  `;
    for (let fileName in filesContent) {
        if (filesContent.hasOwnProperty(fileName)) {
            output += `${filesContent[fileName]}`;
        }
    }
    output += `
                    </body>
                </html>
                `;
    return output;
}