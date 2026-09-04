function divide(a, b) {
    if (b === 0) {
        throw new Error("Don't divide by zero.");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}