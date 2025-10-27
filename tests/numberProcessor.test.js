const { sumOf, calculateAverage, findHighestNumber, findLowestNumber } = require("../src/numberProcessor.js")
const sampleNumbersPath = "./data/sample-numbers.txt"

describe("Number Processing Tests", () => {
    test("Should return the sum of an array", () => {
        const sum = sumOf(sampleNumbersPath)
        expect(sum).toBe(2597)
    })
    test("Should get the highest number in an array", () => {
        const highest = findHighestNumber(sampleNumbersPath)
        expect(highest).toBe(96)
    })
    test("Should get the lowest number in an array", () => {
        const lowest = findLowestNumber(sampleNumbersPath)
        expect(lowest).toBe(73)
    })
    test("Should return the average of an array", () => {
        const average = calculateAverage(sampleNumbersPath)
        expect(average).toBe(86.56666666666666)
    })
})