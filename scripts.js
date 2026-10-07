// Exercise 2 — Predict the Output (push/pop/shift/unshift + length)
let arr = [10, 20, 30];

arr.push(40); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 4 -> [10, 20, 30, 40]
arr.unshift(0); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 5 -> [0, 10, 20, 30, 40]
let removed = arr.pop(); // 40 -> [0, 10, 20, 30]
arr.shift(); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 0 -> [10, 20, 30]

let len = arr.length; // 3

console.log(arr); // Array (3) [10, 20, 30]
console.log(removed); // 40
console.log(len); // 3