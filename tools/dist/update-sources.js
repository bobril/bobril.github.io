"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("./common");
var tutorialPaths = common_1.listOfFilesInDirectory(__dirname + "/../../md");
// <!-- # from-file: ../../examples/routing/index.tsx line:10 col:0 -->
var externalFileLinkRegex = /^(<!-- # from-file:)([\/\w\-. ]+)(((line\:)(\d+)[ ]+))?(((col\:)(\d+)[ ]+))?(\-\-\>)/gm;
var tutorialContent = "";
function run() {
    tutorialPaths.forEach(runForFile);
}
function runForFile(path) {
    loadTutorial(path);
    updateCodeBlocks(path);
    common_1.save(tutorialContent, path);
    console.info("Update of " + path + " successfully finished.");
}
function loadTutorial(tutorialPath) {
    tutorialContent = common_1.readFile(tutorialPath);
    console.info("Loading " + tutorialPath);
}
function updateCodeBlocks(tutorialPath) {
    var lines = tutorialContent.split(common_1.newLineRegex);
    var lastCodeEnd = -1;
    for (var i = lines.length - 1; i >= 0; i--) {
        if (common_1.isCodeMark(lines[i])) {
            lastCodeEnd = processCodeLine(lines, i, lastCodeEnd, tutorialPath);
        }
    }
    tutorialContent = lines.join("\n");
}
function processCodeLine(lines, i, lastCodeEnd, path) {
    if (lastCodeEnd === -1) {
        lastCodeEnd = i;
    }
    else {
        var externalFile = getFileFromCodeLink(lines[i - 2]);
        if (externalFile.file.length > 0) {
            externalFile.file =
                path.substring(0, path.lastIndexOf("/") + 1) + externalFile.file;
            updateFromExternalFile(externalFile, lines, i, lastCodeEnd);
        }
        lastCodeEnd = -1;
    }
    return lastCodeEnd;
}
function updateFromExternalFile(externalFile, lines, i, lastCodeEnd) {
    console.info("Processing external file " + externalFile.file);
    var fileLines = common_1.readFile(externalFile.file).split(common_1.newLineRegex);
    if (externalFile.position) {
        console.log("Line: " + externalFile.position.line + " from Column: " + externalFile.position.col);
        fileLines = [
            fileLines[externalFile.position.line].substr(externalFile.position.col)
        ];
    }
    lines.splice.apply(lines, tslib_1.__spreadArrays([i + 1, lastCodeEnd - i - 1], fileLines));
}
function getFileFromCodeLink(line) {
    var match = new RegExp(externalFileLinkRegex).exec(line.trim());
    var result = {
        file: match !== null && match.length >= 3 ? match[2].trim() : ""
    };
    if (match && match[6] && match[10]) {
        result.position = {
            line: parseInt(match[6], 10) - 1,
            col: parseInt(match[10], 10) - 1
        };
    }
    return result;
}
run();
//# sourceMappingURL=update-sources.js.map