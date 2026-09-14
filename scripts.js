"use strict";

console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof Symbol("id")); // "string" (Incorrect) -> "symbol"
console.log(typeof NaN); // "number"

// Addition
let sym = Symbol("id");
console.log(typeof sym);
console.log(sym.description);