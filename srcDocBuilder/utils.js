function mapToList(input) {
    let list = [];

    for (let key in input) {
        if (input.hasOwnProperty(key)) {
            list.push({key: key, value: input[key]});
        }
    }

    return list;
}

function isExtension(fileName, extension) {
    return fileName.slice(-extension.length) === extension;
}


module.exports.mapToList = mapToList;
module.exports.isExtension = isExtension;