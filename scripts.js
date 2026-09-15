"use strict";

function isStrictlyNaN(value) {
    // เติมโค้ดตรงนี้
    // console.log(`typeof ${value}: ${typeof value}`);
    if (typeof value === "number"){
        return Number.isNaN(value);
    }
    return false;
}

console.log(isStrictlyNaN(NaN));        // true
console.log(isStrictlyNaN("hello"));    // false (ต่างจาก isNaN("hello") ที่จะได้ true!)
console.log(isStrictlyNaN(undefined));  // false (ต่างจาก isNaN(undefined) ที่จะได้ true!)
console.log(isStrictlyNaN(5));          // false