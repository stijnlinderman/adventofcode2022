function getSolution (inputDataAsString) {
    return require('./day6').getIndexOfFirstSetOfUniqueCharacters(inputDataAsString, 14);
}

module.exports = {getSolution};