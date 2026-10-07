// Exercise 4 — Debug the Code (Initialization + Iteration)
function squareArray(n) {
    let result = new Array(n).fill(0);
    console.log(result);
    for (let i = 0; i < n; i++) {
        result[i] = i * i;
    }
    return result;
}

console.log(squareArray(5));

// Learning hasOwnProperty method
const object = {};
object.foo = 42;
object.bar = 43;
console.log(object);
console.log(object.hasOwnProperty("foo"));

const arr = new Array(3);
console.log(arr);
console.log(arr.hasOwnProperty(1));