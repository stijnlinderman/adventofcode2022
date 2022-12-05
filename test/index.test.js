const getSolution = require('../index');
const { expect } = require("chai");

describe ('single value input', () => {
    it ('should be solved to the same answer', () => {
        expect(getSolution("1000")).to.equal("1000");
    })
})