function getSolution (inputDataAsString) {
    const rows = require('../util').splitStringLinesIntoArray(inputDataAsString, '\n');
    let firstTreeX = 0;
    let lastTreeX = rows[0].length - 1;
    const columns = [];
    for (let index=0; index < rows[0].length; index++) {
        columns[index] = "";
    }
    let visibleTreesCoordinates = new Array(rows.length);
    rows.forEach((treeRow, treeY) => {
        visibleTreesCoordinates[treeY] = new Array(treeRow.length);
        let highestTreeHeightFromTheLeft = null;
        for (let treeX = firstTreeX; treeX <= lastTreeX; treeX++) {
            const treeHeight = treeRow.charAt(treeX)*1;
            columns[treeX] += treeHeight;
            if (highestTreeHeightFromTheLeft === null || treeHeight > highestTreeHeightFromTheLeft) {
                visibleTreesCoordinates[treeY][treeX] = true;
                highestTreeHeightFromTheLeft = treeHeight;
            }
        }
        let highestTreeHeightFromTheRight = null;
        for (let treeX = lastTreeX; treeX >= firstTreeX; treeX--) {
            const treeHeight = treeRow.charAt(treeX)*1;
            if (highestTreeHeightFromTheRight === null || treeHeight > highestTreeHeightFromTheRight) {
                visibleTreesCoordinates[treeY][treeX] = true;
                highestTreeHeightFromTheRight = treeHeight;
            }
        }
    })
    let firstTreeY = 0;
    let lastTreeY = columns[0].length - 1;
    columns.forEach((treeColumn, treeX) => {
        let highestTreeHeightFromTheTop = null;
        for (let treeY = firstTreeY; treeY <= lastTreeY; treeY++) {
            console.log(`column from ${firstTreeY} to ${lastTreeY}`)
            const treeHeight = treeColumn.charAt(treeY)*1;
            if (highestTreeHeightFromTheTop === null || treeHeight > highestTreeHeightFromTheTop) {
                visibleTreesCoordinates[treeY][treeX] = true;
                highestTreeHeightFromTheTop = treeHeight;
            }
        }
        let highestTreeHeightFromTheBottom = null;
        for (let treeY = lastTreeY; treeY >= firstTreeY; treeY--) {
            console.log(`column from ${lastTreeY} to ${firstTreeY}`)
            const treeHeight = treeColumn.charAt(treeY)*1;
            if (highestTreeHeightFromTheBottom === null || treeHeight > highestTreeHeightFromTheBottom) {
                visibleTreesCoordinates[treeY][treeX] = true;
                highestTreeHeightFromTheBottom = treeHeight;
            }
        }
    })
    let printString = "";
    visibleTreesCoordinates.forEach((treeRow, treeY) => {
        printString += '\n';
        for (let treeX = 0; treeX <= (treeRow.length-1); treeX++) {
            printString += `${visibleTreesCoordinates[treeY][treeX] ? '*' : ' '}${rows[treeY].charAt[treeX]}`
        }
    })
    console.log(printString)
    return countVisibleTrees(visibleTreesCoordinates);
}

function countVisibleTrees (visibleTreesCoordinates) {
    let visibleTrees = 0;
    visibleTreesCoordinates.forEach((rowOfTrees, rowY) => {
        rowOfTrees.forEach((isTreeVisible, treeX) => {
            if (isTreeVisible === true) {
                visibleTrees++;
            }
        })
    })
    return visibleTrees;
}

module.exports = {getSolution};
