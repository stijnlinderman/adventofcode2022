const { getSolution } = require('../../src/puzzle-solvers/day6');
const { expect } = require("chai");

describe ('day 6 getSolution', () => {
    let input;

    it ('test case 1', () => {
        input = "bvwbjplbgvbhsrlpgdmjqwftvncz";
        expect(getSolution(input)).to.equal(5);
    })

    it ('test case 2', () => {
        input = "nppdvjthqldpwncqszvftbrmjlhg";
        expect(getSolution(input)).to.equal(6);
    })

    it ('test case 3', () => {
        input = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
        expect(getSolution(input)).to.equal(10);
    })

    it ('test case 4', () => {
        input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
        expect(getSolution(input)).to.equal(11);
    })

})