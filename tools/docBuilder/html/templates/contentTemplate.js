function generateContent(sortedHtmlFragments) {
    let output = [];
    for (let i = 0; i < sortedHtmlFragments.length; i++) {
        output.push(`${sortedHtmlFragments[i].content}`);
    }

    return output.join('');
}

module.exports.generateContent = generateContent;