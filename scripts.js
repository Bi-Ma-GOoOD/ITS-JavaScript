"use strict";

// Exercise04 - Debug adding and subtracting date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function daysBetween(a, b) {
    return (b.valueOf() - a.valueOf()) / (1000 * 60 * 60 * 24);
}

const start = new Date(2026, 0, 31); // Sat Jan 31 2026 00:00:00 GMT+0700 (Indochina Time)
const deadline = addDays(start, 30); // Mon Mar 02 2026 00:00:00 GMT+0700 (Indochina Time)

console.log(start.toLocaleDateString("en-GB")); // 31/01/2026
console.log(deadline.toLocaleDateString("en-GB")); // 02/03/2026
console.log(daysBetween(start, deadline)); // 30