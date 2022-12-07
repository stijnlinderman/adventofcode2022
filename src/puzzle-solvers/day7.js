const LINE_SEPARATOR = "\r\n";

function getSolution (inputDataAsString) {
    const directoryMap = Directory.createDirectoryMapFromInputData(inputDataAsString);
    return calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(directoryMap, 100000);
}

class Directory {
    name;
    parentDirectory;
    subDirectories = new Map();
    files = new Map();
    size;

    static createDirectoryMapFromInputData (inputDataAsString) {
        const lines = inputDataAsString.split(LINE_SEPARATOR);
        let rootDirectory = new Directory ("root", null);
        const rootSubDirectory = new Directory ("/", rootDirectory);
        rootDirectory.addSubDirectory(rootSubDirectory);
        let currentDirectory = rootDirectory; // set root directory as starting point for the map
        lines.forEach((line, index) => { // create the map, starting from the root, by looping through the lines
            const lineElements = line.split(" ");
            const firstArgument = lineElements[0];
            switch (firstArgument) {
                case "$":
                    const command = lineElements[1];
                    switch (command) {
                        case "cd":
                            const directoryNameToGoTo = lineElements[2];
                            switch (directoryNameToGoTo) { // go back to the parent directory
                                case "..":
                                    currentDirectory = currentDirectory.parentDirectory;
                                    break;
                                default: // go into a subdirectory
                                    currentDirectory = currentDirectory.subDirectories.get(directoryNameToGoTo);
                            }
                            break;
                        case "ls":
                            // do nothing
                            break;
                        default:
                            // do nothing
                    }
                    break;
                case "dir": // new subdirectory found, add it
                    const subDirectoryName = lineElements[1];
                    const subDirectory = new Directory(subDirectoryName, currentDirectory)
                    currentDirectory.addSubDirectory(subDirectory);
                    break;
                default: // new file found, add it
                    const fileSize = lineElements[0] * 1; // transform string to number
                    const fileName = lineElements[1];
                    currentDirectory.addFile(fileSize, fileName);
            }
        })
        rootDirectory.calculateSizeOfDirectoryAndSubdirectories();
        return rootDirectory;
    }

    constructor (directoryName, parentDirectory) {
        this.name = directoryName;
        this.parentDirectory = parentDirectory;
    }

    addSubDirectory (subDirectory) {
        this.subDirectories.set(subDirectory.name, subDirectory)
    }

    addFile (fileSize, fileName) {
        this.files.set(fileName, fileSize);
    }

    calculateSizeOfDirectoryAndSubdirectories () {
        this.size = 0;
        this.subDirectories.forEach((subDirectory) => {
            subDirectory.calculateSizeOfDirectoryAndSubdirectories();
            this.size += subDirectory.size;
        })
        this.files.forEach((fileSize) => {
            this.size += fileSize;
        })
    }
}

function calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(directory, maximumSize) {
    let totalSize = 0;
    directory.subDirectories.forEach((subDirectory) => {
        const subDirectorySize = subDirectory.size;
        if (subDirectorySize && subDirectorySize <= maximumSize) {
            totalSize += subDirectorySize;
        }
        totalSize += calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(subDirectory, maximumSize);
    })
    return totalSize;
}

module.exports = {getSolution, Directory};