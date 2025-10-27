const { wordCount, longestWord, lineCount } = require("../src/textAnalyzer.js")
const quotes = "./data/quotes.txt"
const sampleText = "./data/sample-text.txt"

describe("Text Analyzer Tests", () => {
    test("Should return the number of words in a file", () => {
        const wcQuotes = wordCount(quotes)
        expect(wcQuotes).toBe(108)

        const wcSampleText = wordCount(sampleText)
        expect(wcSampleText).toBe(207)
    })
    test("Should return the number of lines in a file", () => {
        const lcQuotes = lineCount(quotes)
        expect(lcQuotes).toBe(10)

        const lcSampleText = lineCount(sampleText)
        expect(lcSampleText).toBe(1)
    })
    test("Should return the longest word in a file", () => {
        const longestWordQuotes = longestWord(quotes)
        expect(longestWordQuotes).toBe("sophistication")

        const longestWordSampleText = longestWord(sampleText)
        expect(longestWordSampleText).toBe("infrastructure")
    })
})