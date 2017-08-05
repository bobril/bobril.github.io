const md = require('./remarkable').md;
const fs = require('fs');

const docDirectoryPath = '../doc/';

const readFilesResult = readDirectoryContent(docDirectoryPath);
readFilesResult
    .then((mdFilesContent) => {
        let htmlFilesContent = convertMd2Html(mdFilesContent);
        let outputFile = generateHtmlPage(htmlFilesContent);
        console.log(outputFile);

        fs.writeFile("../doc.html", outputFile, (err) => {
            if(err) {
                return console.log(err);
            }

            console.log("Bobril documentation has been generated!");
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
    let output = `
                    <html>
                        <head>
                        </head>
                  `;
    for (let fileName in filesContent) {
        if (filesContent.hasOwnProperty(fileName)) {
            output += `</br>
                        ${filesContent[fileName]}
                      `;
        }
    }
    output += `
                    </body>
                </html>
                `;
    return output;
}