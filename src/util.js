const LINE_SEPARATOR = "\r\n";

function splitStringLinesIntoArray (string) {
    return string.split(LINE_SEPARATOR);
}

module.exports = { splitStringLinesIntoArray };