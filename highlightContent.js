/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted 
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    const startTag = `<span class="${plainTextPositions}">`;
    const endTag = "</span>";

    let modifiedHTML = htmlContent;

    // To find all occurrences of plainText in htmlContent
    let index = modifiedHTML.indexOf(plainText);
    while (index !== -1) {
        // Inserting the highlight tags at the found position
        modifiedHTML =
            modifiedHTML.slice(0, index) +
            startTag +
            modifiedHTML.slice(index, index + plainText.length) +
            endTag +
            modifiedHTML.slice(index + plainText.length);

        // To move to the next occurrence
        index = modifiedHTML.indexOf(plainText, index + startTag.length + endTag.length);
    }

    return modifiedHTML;
}

console.log(
    highlightHTMLContent(
        "<div><p>HTML content</p><span> HTML</span></div><div><p>HTML content</p><span> HTML</span></div>",
        "HTML content HTMLHTML content HTML",
        [
            { start: 0, end: 4 },
            { start: 12, end: 17 },
            { start: 17, end: 21 },
            { start: 30, end: 34 },
        ]
    )
);

module.exports = highlightHTMLContent;