const fs = require('fs');
const http = require('http');
const puzzleNames = ["1"];

function getSolutions () {
    let solutionsMessage = "";
    puzzleNames.forEach((puzzleName) => {
        const inputFilePath = `assets/puzzle-input/day${puzzleName}.txt`;
        const inputDataAsString = fs.readFileSync(inputFilePath).toString();
        const puzzleAnswer = require('./puzzle-solvers/day1')(inputDataAsString);
        solutionsMessage += `\n${puzzleName}: ${puzzleAnswer}`;
    })
    return solutionsMessage;
}

http.createServer(function (req, res) {
    const inputDataAsString = fs.readFileSync(`assets/puzzle-input/day${"1"}.txt`).toString();
    res.write(getSolutions());
    res.end();
}) 
.listen(8080);