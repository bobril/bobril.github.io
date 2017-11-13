export function mapToList<T>(input: { [name: string]: T }): T[] {
    let list = [];

    for (let key in input) {
        if (input.hasOwnProperty(key)) {
            list.push({key: key, value: input[key]});
        }
    }

    return list;
}

export function isExtension(fileName: string, extension: string): boolean {
    return fileName.slice(-extension.length) === extension;
}