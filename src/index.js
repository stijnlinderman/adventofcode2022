const fs = require('fs');
const http = require('http');

function getSolutions (puzzleIds) {
    let solutionsMessage = "";
    puzzleIds.forEach((puzzleId) => {
        const inputFilePath = `assets/puzzle-input/day${puzzleId}.txt`;
        const inputDataAsString = fs.readFileSync(inputFilePath).toString();
        const puzzleAnswer = require(`./puzzle-solvers/day${puzzleId}`).getSolution(inputDataAsString);
        solutionsMessage += `\nDay ${puzzleId}: ${puzzleAnswer}`;
    })
    return solutionsMessage;
}
module.exports = getSolutions;

http.createServer(function (req, res) {
    const puzzleIds = ["1", "1-2", "6", "6-2", "7", "7-2", "8"];
    const solutions = getSolutions(puzzleIds);
    res.write(solutions);
    res.end();
}) 
.listen(8080);