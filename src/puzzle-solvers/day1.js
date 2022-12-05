const LINE_SEPARATOR = "\r\n";

function getSolution (inputDataAsString) {
    const values = inputDataAsString.split(LINE_SEPARATOR);
    let highestGroupValue = 0;
    let newGroupValue = 0;
    values.forEach((value) => {
        if (value === "") {
            newGroupValue = 0;
        } else {
            newGroupValue += value*1;
        }
        if (newGroupValue > highestGroupValue) {
            highestGroupValue = newGroupValue;
        }
    })
    return highestGroupValue.toString();
}
module.exports = getSolution;