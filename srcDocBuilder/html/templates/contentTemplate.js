function generateContent(sortedHtmlFragments) {
    let output = '';
    for (let i = 0; i < sortedHtmlFragments.length; i++) {
        output += `${sortedHtmlFragments[i].content}`;
    }
    return output;
}

module.exports.generateContent = generateContent;