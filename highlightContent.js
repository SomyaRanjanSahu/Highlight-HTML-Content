/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted 
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */

// Approach:

// - sort the plainTextPositions based on start position.
// - start iterating htmlContent
// - keep inserting its values into result string
// - start iterating plainText whenever its index value is equal to htmlContent index value.
// - while iterating keep checking for plainTextPosition arrays start value
// - when start value is equal to plainText index , insert <mark> tag in the result string before inserting the htmlContent value.
// - now check for end value, when end index is equal to plainText index, insert </mark> tag in the result string. 
// - similarly do this for other array elements of painTextPositions
// - return the final string 

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // Sorting the plainTextPositions array in ascending order based on the start property
    plainTextPositions.sort((a, b) => a.start - b.start);

    let result = ""; // Initializing an empty string to store the final result

    let htmlContentIndex = 0; // Initializing a counter to traverse htmlContent
    let plainTextIndex = 0; // Initializing a counter to traverse plainText

    while (htmlContentIndex < htmlContent.length) {
        for (let k = 0; k < plainTextPositions.length; k++) {
            // If the current position matches the start position, inserting an opening <mark> tag
            if (plainTextPositions[k].start === plainTextIndex) {
                result += "<mark>";
            }
            // If the current position matches the end position, inserting a closing </mark> tag
            else if (plainTextPositions[k].end === plainTextIndex) {
                result += "</mark>";
            }
        }

        // Adding the current character from htmlContent to the answer
        result += htmlContent.charAt(htmlContentIndex);

        // If the current character from htmlContent matches the current character from plainText,
        // incrementing the plainText counter (plainTextIndex) to indicate a matching character
        if (htmlContent.charAt(htmlContentIndex) === plainText.charAt(plainTextIndex)) {
            plainTextIndex++;
        }

        // Moving to the next character in htmlContent
        htmlContentIndex++;
    }

    // Return the final result
    return result;
}

module.exports = highlightHTMLContent;