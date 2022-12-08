const { getSolution } = require('../../src/puzzle-solvers/day8');
const { expect } = require("chai");

describe ('day 8 getSolution', () => {
    let input;

    it ('test case', () => {
        input = "30373\n25512\n65332\n33549\n35390";
        expect(getSolution(input)).to.equal(21);
    })
})
