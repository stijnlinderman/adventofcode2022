function getSolution (inputDataAsString) {
    return getIndexOfFirstSetOfUniqueCharacters(inputDataAsString, 4);
}

function getIndexOfFirstSetOfUniqueCharacters (string, charGroupSize) {
    const stringLength = string.length;
    const lastIndexToCheck = stringLength - charGroupSize;
    let foundIndex;
    for (let i=0; i<=lastIndexToCheck; i++) {
        const groupLastCharIndex = i + charGroupSize;
        const foundCharacters = [];
        for (let charIndex=i; charIndex<groupLastCharIndex; charIndex++) {
            foundCharacters.push(string.charAt(charIndex));
        }
        if (areAllArrayEntriesUnique(foundCharacters)) {
            return i+charGroupSize;
        }
    }
    return null;
}

function areAllArrayEntriesUnique (array) {
    let unique = true;
    for (let i=0; i<array.length; i++) {
        const char = array[i];
        for (let j=0; j<array.length; j++) {
            const charToCompareTo = array[j];
            if (i != j && char == charToCompareTo) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {getSolution, getIndexOfFirstSetOfUniqueCharacters};