const highlightHTMLContent = require("./highlightContent");

describe("highlightHTMLContent function", () => {
  test("Test case 1", () => {
    // Test data
    const htmlContent = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
    const plainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const plainTextPositions = [{ start: 6, end: 11 }];

    // Calling the function to modify the HTML content
    const modifiedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);

    // Expected result with the matched text wrapped in the highlight class
    const expectedHTML =
      '<p>Lorem <mark>ipsum</mark> dolor sit amet, consectetur adipiscing elit.</p>';

    // Asserting that the modified HTML matches the expected result
    expect(modifiedHTML).toBe(expectedHTML);
  });

  test("Test case 2", () => {
    // Test data
    const htmlContent = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
    const plainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const plainTextPositions = [{ start: 6, end: 11 }, { start: 18, end: 26 }];

    const modifiedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);

    const expectedHTML =
      '<p>Lorem <mark>ipsum</mark> dolor <mark>sit amet</mark>, consectetur adipiscing elit.</p>';

    expect(modifiedHTML).toBe(expectedHTML);
  });


});
