"use strict";

console.log(typeof Symbol()); // "symbol"
console.log(typeof Symbol("hello").description); // "string"
console.log(typeof 42n); // "bigint"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"