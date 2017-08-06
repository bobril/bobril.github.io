function mapToList(input) {
    let list = [];

    for (let key in input) {
        if (input.hasOwnProperty(key)) {
            let item = {key: '', value: ''};
            item.key = key;
            item.value = input[key];
            list.push(item);
        }
    }

    return list;
}

module.exports.mapToList = mapToList;