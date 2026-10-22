"use strict";

// Exercise03 - ดึงส่วนต่างๆ ของ Date
const d = new Date(2026, 11, 25, 18, 30, 45); //2026-12-25T18:30:45.000 GMT+7

console.log(d);
console.log(d.getFullYear());   // 2026
console.log(d.getMonth());      // 11
console.log(d.getDate());       // 25
console.log(d.getDay());        // 5
console.log(d.getHours());      // 18

console.log(new Date(2026, 12, 1).getFullYear());   // 2027
console.log(new Date(2026, 12, 1).getMonth());      // 0