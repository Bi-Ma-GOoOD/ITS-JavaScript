function processData(input) {
    try {
        try {
            if (typeof input !== "number") {
                throw new TypeError("Input must be a number");
            }
            console.log("Inner: valid number " + input);
        } catch (innerErr) {
            console.log("Inner catch: " + innerErr.name); // Inner catch: TypeError
            throw new Error("Re-thrown from inner");
        }
    } catch (outerErr) {
        console.log("1-Outer catch: " + outerErr.name); // outer catch: Re-thrown from inner
        console.log("2-Outer catch: " + outerErr.message); // outer catch: Re-thrown from inner
    } finally {
        console.log("Cleanup done"); // cleanup done
    }
}

processData("hello");