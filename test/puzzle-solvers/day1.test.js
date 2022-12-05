const getSolution = require('../../src/puzzle-solvers/day1');
const { expect } = require("chai");

describe ('getSolution', () => {
    let input;

    it ('returns 1000 when only 1000 is input', () => {
        input = "1000";
        expect(getSolution(input)).to.equal("1000");
    });

    it ('returns 2000 when two values are input as group', () => {
        input = "1000\r\n1000";
        expect(getSolution(input)).to.equal("2000");
    });

    it ('returns the highest value when two values are input as separate groups', () => {
        input = "1000\r\n\r\n2000";
        expect(getSolution(input)).to.equal("2000");
    });

    it ('returns the highest group value when 2 groups of values are input', () => {
        input = "1000\r\n1000\r\n\r\n2000\r\n2000";
        expect(getSolution(input)).to.equal("4000");
    });

    it ('returns the highest group value when 3 groups of values are input', () => {
        input = "1000\r\n1000\r\n\r\n2000\r\n2000\r\n2000\r\n\r\n3000\r\n2000";
        expect(getSolution(input)).to.equal("6000");
    });

})