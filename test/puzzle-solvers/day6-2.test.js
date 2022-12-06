const { getSolution } = require('../../src/puzzle-solvers/day6-2');
const { expect } = require("chai");

describe ('day 6-2 getSolution', () => {
    let input;

    it ('test case 1', () => {
        input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
        expect(getSolution(input)).to.equal(19);
    })

    it ('test case 2', () => {
        input = "bvwbjplbgvbhsrlpgdmjqwftvncz";
        expect(getSolution(input)).to.equal(23);
    })

    it ('test case 3', () => {
        input = "nppdvjthqldpwncqszvftbrmjlhg";
        expect(getSolution(input)).to.equal(23);
    })

    it ('test case 4', () => {
        input = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
        expect(getSolution(input)).to.equal(29);
    })

    it ('test case 5', () => {
        input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
        expect(getSolution(input)).to.equal(26);
    })

})