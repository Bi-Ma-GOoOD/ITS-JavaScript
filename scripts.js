"use strict";

console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14abc")); // 3.14
console.log(Number("  123  ")); // NaN (incorrect) => 123
console.log(Number("")); // NaN (incorrect) => 0
console.log(Number("abc")); // NaN
console.log(Number(null)); // null (incorrect) => 0
console.log(Number(undefined)); // NaN