function openMyFile() {
    console.log("Open my file.");
}

function writeMyFile(data) {
    if (!data){
        throw new Error("Reference type error.");
    }
    console.log(`Write "${data}" into the file.`);
}

function handleError(error){
    console.error(`Error: ${error}`);
}

function closeMyFile(){
    console.log("Close my file.");
}

try {
    openMyFile();
    let theData = "Akrapon Phlayyai";
    writeMyFile(theData); // This may throw an error
} catch (e) {
    handleError(e); // If an error occurred, handle it
} finally {
    closeMyFile(); // Always close the resource
}