const { getSolution } = require('../../src/puzzle-solvers/day7-2');
const { expect } = require("chai");

describe ('day 7-2 getSolution', () => {
    let input;

    it ('test case', () => {
        input = "$ cd /\r\n$ ls\r\ndir a\r\n14848514 b.txt\r\n8504156 c.dat\r\ndir d\r\n$ cd a\r\n$ ls\r\ndir e\r\n29116 f\r\n2557 g\r\n62596 h.lst\r\n$ cd e\r\n$ ls\r\n584 i\r\n$ cd ..\r\n$ cd ..\r\n$ cd d\r\n$ ls\r\n4060174 j\r\n8033020 d.log\r\n5626152 d.ext\r\n7214296 k";
        expect(getSolution(input)).to.equal(24933642);
    })

})