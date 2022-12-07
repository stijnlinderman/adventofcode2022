function getSolution (inputDataAsString) {
    const directoryMap = require('./day7').Directory.createDirectoryMapFromInputData(inputDataAsString);
    const totalSpaceAvailable = 70000000
    const spaceLeft = totalSpaceAvailable - directoryMap.getSize();
    const spaceNeeded = 30000000;
    const spaceToFreeUp = spaceNeeded - spaceLeft;
    return getDirectorySizeOfDirectoryWithSizeNearestTo(directoryMap, spaceToFreeUp);
}

function getDirectorySizeOfDirectoryWithSizeNearestTo (directory, nearestToSize, sizeFound = null) {
    const directorySize = directory.getSize();
    if (sizeFound === null) {
        if (directorySize >= nearestToSize) {
            sizeFound = directorySize;
        }
    } else {
        if (directorySize >= nearestToSize && directorySize < sizeFound) {
            sizeFound = directorySize;
        }
    }
    directory.getSubDirectories().forEach((subDirectory) => {
        sizeFound = getDirectorySizeOfDirectoryWithSizeNearestTo(subDirectory, nearestToSize, sizeFound);
    })
    return sizeFound;
}

module.exports = {getSolution};