"use strict";

function isValidNumber(input) {
    return input !== "" && !Number.isNaN(Number(input));
}

console.log(isValidNumber("123"));   // ควรได้ true
console.log(isValidNumber("abc"));   // ควรได้ false
console.log(isValidNumber(""));      // ควรได้ false (แต่โค้ดปัจจุบันให้ true!)