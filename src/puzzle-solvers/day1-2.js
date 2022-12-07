function getSolution (inputDataAsString) {
    const values = require('../util').splitStringLinesIntoArray(inputDataAsString);
    const caloriesPerElf = []
    let newGroupValue = 0;
    values.forEach((value, index) => {
        if (value === "") {
            caloriesPerElf.push(newGroupValue);
            newGroupValue = 0;
        } else {
            newGroupValue += value*1;
            if (values[index+1] == null) {
                caloriesPerElf.push(newGroupValue);  
            }
        }
    })
    return getTotalCaloriesOfThreeElvesCarryingMostCalories(caloriesPerElf);
}

function getTotalCaloriesOfThreeElvesCarryingMostCalories (caloriesPerElf) {
    const topThreeCalories = [0, 0, 0];
    caloriesPerElf.forEach((calories) => {
        for (let i=0; i<=2; i++) { // compare calories to the current top 3 calories
            if (calories > topThreeCalories[i]) { // if calories deserves a top 3 spot
                for (let j=1; j>=i; j--) { // move the current calories in top 3 to a lower spot
                    topThreeCalories[j+1] = topThreeCalories[j];
                }
                topThreeCalories[i] = calories;
                break;
            }
        }
    })
    return topThreeCalories[0] + topThreeCalories[1] + topThreeCalories[2];
}

module.exports = {getSolution};