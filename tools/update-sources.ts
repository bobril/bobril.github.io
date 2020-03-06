import {readFile, save, listOfFilesInDirectory, newLineRegex, isCodeMark} from "./common";

const tutorialPaths: string[] = listOfFilesInDirectory(__dirname + "/../../md");
// <!-- # from-file: ../../examples/routing/index.tsx line:10 col:0 -->
const externalFileLinkRegex = /^(<!-- # from-file:)([\/\w\-. ]+)(((line\:)(\d+)[ ]+))?(((col\:)(\d+)[ ]+))?(\-\-\>)/gm;

let tutorialContent = "";

function run() {
  tutorialPaths.forEach(runForFile);
}

function runForFile(path: string) {
  loadTutorial(path);
  updateCodeBlocks(path);
  save(tutorialContent, path);
  console.info(`Update of ${path} successfully finished.`);
}

function loadTutorial(tutorialPath: string) {
  tutorialContent = readFile(tutorialPath);
  console.info(`Loading ${tutorialPath}`);
}

function updateCodeBlocks(tutorialPath: string) {
  const lines = tutorialContent.split(newLineRegex);
  let lastCodeEnd = -1;

  for (let i = lines.length - 1; i >= 0; i--) {
    if (isCodeMark(lines[i])) {
      lastCodeEnd = processCodeLine(lines, i, lastCodeEnd, tutorialPath);
    }
  }

  tutorialContent = lines.join("\n");
}

function processCodeLine(
  lines: string[],
  i: number,
  lastCodeEnd: number,
  path: string
) {
  if (lastCodeEnd === -1) {
    lastCodeEnd = i;
  } else {
    const externalFile = getFileFromCodeLink(lines[i - 2]);
    if (externalFile.file.length > 0) {
      externalFile.file =
        path.substring(0, path.lastIndexOf("/") + 1) + externalFile.file;
      updateFromExternalFile(externalFile, lines, i, lastCodeEnd);
    }
    lastCodeEnd = -1;
  }
  return lastCodeEnd;
}

function updateFromExternalFile(
  externalFile: IExternalFile,
  lines: string[],
  i: number,
  lastCodeEnd: number
) {
  console.info(`Processing external file ${externalFile.file}`);
  let fileLines = readFile(externalFile.file).split(newLineRegex);
  if (externalFile.position) {
    console.log(
      `Line: ${externalFile.position.line} from Column: ${externalFile.position.col}`
    );
    fileLines = [
      fileLines[externalFile.position.line].substr(externalFile.position.col)
    ];
  }
  lines.splice(i + 1, lastCodeEnd - i - 1, ...fileLines);
}

interface IExternalFile {
  file: string;
  position?: {
    line: number;
    col: number;
  };
}

function getFileFromCodeLink(line: string): IExternalFile {
  const match = new RegExp(externalFileLinkRegex).exec(line.trim());
  const result: IExternalFile = {
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
