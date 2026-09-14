"use strict";

console.log((123.456).toPrecision(4)); // (expo: 2 < pre: 4) 123.5
console.log((123.456).toPrecision(2)); // (expo: 2 === pre: 2) 1.2e+2
console.log((0.0005).toPrecision(1)); // (expo: -4 > -6) 0.0005
console.log((100).toPrecision(2)); // (expo: 2 === pre: 2) 1.0e+2