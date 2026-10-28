"use strict";

// Exercise 5: Localization (MM/DD vs DD/MM)
const date = new Date(2026, 9, 5);   // 5 ตุลาคม 2026

console.log(date.toLocaleDateString("en-US"));    // a) "10/5/2026"
console.log(date.toLocaleDateString("en-GB"));    // b) "05/10/2026"

console.log(date.toLocaleDateString("en-US", {
    month: "2-digit", day: "2-digit", year: "numeric"
}));                                             // c) "10/05/2026"

console.log(date.toLocaleDateString("en-US", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
}));                                             // d) "Monday, October 5, 2026"