function getSolution (inputDataAsString) {
    const rows = require('../util').splitStringLinesIntoArray(inputDataAsString);
    let visibleTreesCoordinates = new Array(rows.length);
    rows.forEach((treeRow, treeY) => {
        console.log(`checking row ${treeY}`)
        let firstTreeX = 0;
        let lastTreeX = treeRow.length - 1;
        visibleTreesCoordinates[treeY] = new Array(lastTreeX);
        for (let treeX = firstTreeX; treeX <= lastTreeX; treeX++) {
            const treeHeight = treeRow.charAt(treeX)*1;
            let visibleFromTheLeft = true;
            for (let otherTreeX = treeX - 1; otherTreeX >= firstTreeX; otherTreeX--) {
                const otherTreeHeight = treeRow.charAt(otherTreeX);
                if (otherTreeHeight >= treeHeight) {
                    visibleFromTheLeft = false;
                    break;
                }
            }
            if (visibleFromTheLeft === true) {
                visibleTreesCoordinates[treeY][treeX] = true;
            }
        }
    })
    return countVisibleTrees(visibleTreesCoordinates);
}

function countVisibleTrees (visibleTreesCoordinates) {
    let visibleTrees = 0;
    visibleTreesCoordinates.forEach((rowOfTrees, rowY) => {
        rowOfTrees.forEach((isTreeVisible, treeX) => {
            if (isTreeVisible == true) {
                visibleTrees++;
            }
        })
    })
    return visibleTrees;
}

module.exports = {getSolution};