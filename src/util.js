const LINE_SEPARATOR = "\r\n";

function splitStringLinesIntoArray (string, separator = LINE_SEPARATOR) {
    return string.split(separator);
}

module.exports = { splitStringLinesIntoArray };
