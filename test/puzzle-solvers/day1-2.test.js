const { getSolution } = require('../../src/puzzle-solvers/day1-2');
const { expect } = require("chai");

describe ('day 1-2 getSolution', () => {
    let input;

    it ('test case 1', () => {
        input = "1000\r\n2000\r\n3000\r\n\r\n4000\r\n\r\n5000\r\n6000\r\n\r\n7000\r\n8000\r\n9000\r\n\r\n10000";
        expect(getSolution(input)).to.equal(45000);
    });

})