const highlightHTMLContent = require("./highlightContent");

describe("highlightHTMLContent function", () => {
  test("should highlight the matched text in the HTML content", () => {
    // Test data
    const htmlContent = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
    const plainText = "ipsum";
    const highlightClass = "highlighted-text";

    // Calling the function to modify the HTML content
    const modifiedHTML = highlightHTMLContent(htmlContent, plainText, highlightClass);

    // Expected result with the matched text wrapped in the highlight class
    const expectedHTML =
      '<p>Lorem <span class="highlighted-text">ipsum</span> dolor sit amet, consectetur adipiscing elit.</p>';

    // Asserting that the modified HTML matches the expected result
    expect(modifiedHTML).toBe(expectedHTML);
  });

  test("should handle multiple occurrences of the matched text", () => {
    // Test data
    const htmlContent = "<p>Lorem ipsum ipsum ipsum dolor sit amet.</p>";
    const plainText = "ipsum";
    const highlightClass = "highlighted-text";

    // Calling the function to modify the HTML content
    const modifiedHTML = highlightHTMLContent(htmlContent, plainText, highlightClass);

    // Expected result with all occurrences of the matched text wrapped in the highlight class
    const expectedHTML =
      '<p>Lorem <span class="highlighted-text">ipsum</span> <span class="highlighted-text">ipsum</span> <span class="highlighted-text">ipsum</span> dolor sit amet.</p>';

    // Asserting that the modified HTML matches the expected result
    expect(modifiedHTML).toBe(expectedHTML);
  });

  test("should not modify the HTML if the plainText is not found", () => {
    // Test data
    const htmlContent = "<p>Lorem ipsum dolor sit amet.</p>";
    const plainText = "nonexistent";
    const highlightClass = "highlighted-text";

    // Calling the function to modify the HTML content
    const modifiedHTML = highlightHTMLContent(htmlContent, plainText, highlightClass);

    // Asserting that the modified HTML is the same as the original HTML content since the plainText is not found
    expect(modifiedHTML).toBe(htmlContent);
  });
});
