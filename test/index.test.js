const getSolutions = require('../src/index');
const { expect } = require("chai");

describe ('getSolutions', () => {
    it ('should return a string', () => {
        expect(typeof getSolutions([])).to.equal(typeof "");
    })
})