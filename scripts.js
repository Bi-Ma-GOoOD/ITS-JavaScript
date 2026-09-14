"use strict";

console.log(Number("   ")); // 0
console.log(Number("0x1F")); // 31 => [F * 1 pow(16, 0) = 15, 1 * 16 pow(16, 1) = 16 => 15 + 16 = 31]
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number([])); // 0
console.log(Number([5])); // 5
console.log(Number([1, 2])); // NaN