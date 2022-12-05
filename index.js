const fs = require('fs');
const http = require('http');

const inputFilePath = 'input.txt';

function getSolution (inputDataAsString) {
    return inputDataAsString;
}
module.exports = getSolution;

http.createServer(function (req, res) {
    const inputDataAsString = fs.readFileSync('input.txt').toString();
    res.write(getSolution(inputDataAsString));
    res.end();
}) 
.listen(8080);