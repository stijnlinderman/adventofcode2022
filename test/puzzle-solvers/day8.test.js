const { getSolution } = require('../../src/puzzle-solvers/day8');
const { expect } = require("chai");

describe ('day 8 getSolution', () => {
    let input;

    it ('test case', () => {
        input = "30373\r\n25512\r\n65332\r\n33549\r\n35390";
        expect(getSolution(input)).to.equal(21);
    })

})