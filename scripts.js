try {
    console.log("A");
    let result = notDefinedVariable + 1;
    console.log("B");
} catch (error) {
    console.log("C: " + error.name);
    console.log("C: " + error.message);
} finally {
    console.log("D");
}
console.log("E");