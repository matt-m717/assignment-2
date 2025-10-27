const fs = require("fs");

function getWords(path) {
    return fs.readFileSync(path, "utf-8")
    .match(/[A-z0-9'\-_]+/g)
}
function wordCount(path) {
    return getWords(path).length;
}

function longestWord(path) {
    return getWords(path)
    .reduce((longest, current) => {
        return current.length > longest.length ? current : longest
    })
}

function lineCount(path) {
    return fs.readFileSync(path, "utf-8")
    .trim()
    .split('\n')
    .length
}

module.exports = {
    wordCount,
    longestWord,
    lineCount
}