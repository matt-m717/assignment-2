const fs = require("fs");

// returns an array of numbers from a path
function parseNumArray(path) {
    return fs.readFileSync(path, "utf-8")
    .split('\n')
    .map((num => Number(num)))
}

function sumOf(path) {
    return parseNumArray(path)
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
}

function calculateAverage(path) {
    const numArray = parseNumArray(path)
    return numArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }) / numArray.length
}

function findHighestNumber(path) {
    return parseNumArray(path)
    .reduce((highest, current) => {
        return current > highest ? current : highest
    })
}

function findLowestNumber(path) {
    return parseNumArray(path)
    .reduce((lowest, current) => {
        return current < lowest ? current : lowest
    })
}

module.exports = {
    sumOf,
    calculateAverage,
    findLowestNumber,
    findHighestNumber
}