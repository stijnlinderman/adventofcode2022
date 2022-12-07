const LINE_SEPARATOR = "\r\n";

function getSolution (inputDataAsString) {
    const directoryMap = Directory.createDirectoryMapFromInputData(inputDataAsString);
    return calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(directoryMap, 100000);
}

class Directory {
    #name;
    #parentDirectory;
    #subDirectories = new Map();
    #files = new Map();
    #size;

    constructor (directoryName, parentDirectory) {
        this.#name = directoryName;
        this.#parentDirectory = parentDirectory;
    }

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
                            switch (directoryNameToGoTo) {
                                case "..": // go back to the parent directory
                                    currentDirectory = currentDirectory.getParentDirectory();
                                    break;
                                default: // go into a subdirectory
                                    currentDirectory = currentDirectory.getSubDirectoryByName(directoryNameToGoTo);
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

    addSubDirectory (subDirectory) {
        this.getSubDirectories().set(subDirectory.getName(), subDirectory)
    }

    addFile (fileSize, fileName) {
        this.getFiles().set(fileName, fileSize);
    }

    getName () {
        return this.#name;
    }

    getParentDirectory () {
        return this.#parentDirectory;
    }

    getSubDirectories () {
        return this.#subDirectories;
    }

    getSubDirectoryByName (subDirectoryName) {
        return this.getSubDirectories().get(subDirectoryName);
    }

    getFiles () {
        return this.#files;
    }

    getSize () {
        return this.#size;
    }

    setSize (size) {
        this.#size = size;
    }

    increaseSize (sizeToAdd) {
        this.#size += sizeToAdd;
    }

    calculateSizeOfDirectoryAndSubdirectories () {
        this.setSize(0);
        this.getSubDirectories().forEach((subDirectory) => {
            subDirectory.calculateSizeOfDirectoryAndSubdirectories();
            this.increaseSize(subDirectory.getSize());
        })
        this.getFiles().forEach((fileSize) => {
            this.increaseSize(fileSize);
        })
    }
}

function calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(directory, maximumSize) {
    let totalSize = 0;
    directory.getSubDirectories().forEach((subDirectory) => {
        const subDirectorySize = subDirectory.getSize();
        if (subDirectorySize && subDirectorySize <= maximumSize) {
            totalSize += subDirectorySize;
        }
        totalSize += calculateTotalSizeOfDirectoriesThatAreNotBiggerThan(subDirectory, maximumSize);
    })
    return totalSize;
}

module.exports = {getSolution, Directory};