{/* Exercise01: Predict the Output */}
let a = 10;
let b = 3;

console.log(a % b);        // บรรทัด A
console.log(a / b);        // บรรทัด B

let x = 5;
console.log(x++);          // บรรทัด C
console.log(x);            // บรรทัด D
console.log(++x);          // บรรทัด E

let msg = "Score: " + 10 + 5;
console.log(msg);          // บรรทัด F

{/* Exercise02: Debug the Code */}
let score = 100;
let bonus = 5;

score =+ bonus;        // ต้องการ: score += bonus
let penalty = score * 10 / 100;
score =- penalty;      // ต้องการ: score -= penalty

console.log(score);

{/* 
    Exercise03: Complete the Code 
    เติมโค้ดในช่อง ____ ให้ตัวแปร total คำนวณราคาสินค้าได้ถูกต้อง โดยใช้ compound assignment เท่านั้น (ห้ามเขียน total = total + ...)
    
    let total = 0;
    let itemPrice = 250;
    let quantity = 3;
    let discount = 50;
    let taxRate = 0.07; // 7%
    
    total ____ itemPrice ____ quantity;  // เพิ่ม total ตามราคา x จำนวน
    total ____ discount;                  // หักส่วนลด
    let tax = total * taxRate;
    total ____ tax;                       // บวกภาษี
    
    console.log(total);
*/}