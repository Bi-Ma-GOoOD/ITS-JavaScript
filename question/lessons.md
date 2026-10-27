# :question: รวมแบบทดสอบท้ายบทเรียน :alien:
:house: [กลับไปที่หน้าแรก](/README.md)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp; ไฟล์นี้คือการรวบรวมคำถามท้ายบทเรียนทั้งหมดตั้งแต่หัวข้อย่อยที่ 1.1 - 1.5 ใน Domain ที่ 1 และหัวข้อย่อยที่ 2.1 - 2.3 ใน Domain ที่ 2
## :point_up: วิธีทำโจทย์ :thinking:
&nbsp;&nbsp;&nbsp;&nbsp;เดาผลลัพธ์หรือเขียนคำตอบของตนเองก่อนรันโค้ดจริงทุกครั้ง แล้วค่อยเทียบผล ข้อที่ผิดให้ย้อนดูว่าเข้าใจกลไกคลาดเคลื่อนตรงไหน
## :large_orange_diamond: สารบัญ :corn:
* :heavy_plus_sign: [Domain 1: JavaScript Operators, Methods, and Keywords](#heavy_plus_sign-domain-1-javascript-operators-methods-and-keywords-old_key)
    * :mag: [1.1 Complete and debug code that uses assignment and arithmetic operators](#mag-11-complete-and-debug-code-that-uses-assignment-and-arithmetic-operators)
    * :goat: [1.2 Apply JavaScript best practices](#goat-12-apply-javascript-best-practices)
    * :white_check_mark: [1.3 Evaluate the use of internal and external scripts](#white_check_mark-13-evaluate-the-use-of-internal-and-external-scripts)
    * :spider_web: [1.4 Implement exception handling](#spider_web-14-implement-exception-handling)
    * :cookie: [1.5 Complete and debug code that interacts with the Browser Object Model (BOM)](#cookie-15-complete-and-debug-code-that-interacts-with-the-browser-object-model-bom)
* :floppy_disk: [Domain 2: Variables, Data Types, and Functions](#floppy_disk-domain-2-variables-data-types-and-functions-smiley)
    * :chicken: [2.1 Declare and use variables of primitive data types](#chicken-21-declare-and-use-variables-of-primitive-data-types)
    * :fleur_de_lis: [2.2 Declare and use arrays](#fleur_de_lis-22-declare-and-use-arrays)
    * :ticket: [2.3 Complete and debug code that uses objects](#ticket-23-complete-and-debug-code-that-uses-objects)

## :heavy_plus_sign: Domain 1: JavaScript Operators, Methods, and Keywords :old_key:

### :mag: 1.1 Complete and debug code that uses assignment and arithmetic operators

**Exercise 1: Predict the Output**

ทายว่า `console.log` แต่ละบรรทัดจะพิมพ์อะไร

```javascript
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
```

**Exercise 2: Debug the Code**

โค้ดนี้ตั้งใจจะเพิ่มคะแนน (score) ทีละ 5 แต้ม แล้วหักค่าปรับ (penalty) 10% ของคะแนนรวม แต่มีบั๊ก 2 จุด หาให้เจอแล้วแก้

```javascript
let score = 100;
let bonus = 5;

score =+ bonus;        // ต้องการ: score += bonus
let penalty = score * 10 / 100;
score =- penalty;      // ต้องการ: score -= penalty

console.log(score);
```

**Exercise 3: Complete the Code**

เติมโค้ดในช่อง `____` ให้ตัวแปร `total` คำนวณราคาสินค้าได้ถูกต้อง โดยใช้ compound assignment เท่านั้น (ห้ามเขียน `total = total + ...`)

```javascript
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
```

### :goat: 1.2 Apply JavaScript best practices

**Exercise 1: Find the Bugs (Naming และ Keywords)**

โค้ดนี้มีปัญหาเรื่อง naming convention และ reserved keyword อยู่ 4 จุด หาให้เจอแล้วแก้

```javascript
const Max-Score = 100;
let 2ndPlace = 85;
var return = "done";
let user name = "Alex";

console.log(Max-Score, 2ndPlace, return, user name);
```

**Exercise 2: const vs let**

ทำนายว่าบรรทัดไหนจะเกิด Error และ error ประเภทไหน

```javascript
const PI = 3.14;
PI = 3.14159;              // บรรทัด A

const person = { name: "Tom" };
person.name = "Jerry";     // บรรทัด B
console.log(person.name);

let counter = 0;
counter = counter + 1;     // บรรทัด C
```

**Exercise 3: Refactor for Best Practices**

โค้ดนี้ทำงานถูกต้อง แต่เขียนแบบแย่มาก (ไม่มี comment, naming ไม่ดี, ใช้ `var`, ไม่มี indentation) ให้ refactor ตาม best practice ที่เรียนมา โดยผลลัพธ์ต้องเหมือนเดิม

```javascript
var x=10;var y=20;var z=x+y;console.log(z);
```

**Exercise เสริม: Prefer const**

โค้ดนี้ทำงานถูกต้อง แต่ใช้ `let` ทุกตัวแปรโดยไม่ได้เลือกอย่างเหมาะสม อ่านโค้ดทั้งหมดแล้วตัดสินใจว่าตัวแปรไหนควรเป็น `const` และตัวไหนต้องเป็น `let` จริงๆ จากนั้นเขียนโค้ดใหม่ทั้งหมดตามหลัก prefer const

```javascript
let storeName = "Coffee Corner";
let pricePerCup = 45;
let cupsOrdered = 3;
let totalPrice = pricePerCup * cupsOrdered;
let discountRate = 0.1;

if (cupsOrdered >= 3) {
    totalPrice = totalPrice - (totalPrice * discountRate);
}

let receipt = storeName + ": " + totalPrice + " baht";
console.log(receipt);

let taxRate = 0.07;
let finalPrice = totalPrice;
finalPrice = finalPrice + (finalPrice * taxRate);

console.log(finalPrice);
```

**คำใบ้:** ไล่หาทีละตัวแปรว่ามีบรรทัดไหนเขียนทับค่าเดิมหรือไม่ (มีเครื่องหมาย `=` เกิดขึ้นอีกครั้งหลังประกาศครั้งแรก โดยไม่ใช่ `==` หรือ `===`)

### :white_check_mark: 1.3 Evaluate the use of internal and external scripts

**Exercise 1: Identify the Type**

บอกว่าโค้ดแต่ละส่วนเป็น script ประเภทไหน (Inline / Internal / External) และอันไหนเป็น best practice มากที่สุดสำหรับโปรเจกต์ขนาดใหญ่ พร้อมเหตุผลสั้นๆ

```html
<!-- A -->
<button onclick="console.log('clicked')">Click</button>

<!-- B -->
<script>
    let x = 5;
    console.log(x);
</script>

<!-- C -->
<script src="main.js"></script>
```

**Exercise 2: Predict Execution Order**

เรียงลำดับว่า `console.log` ไหนรันก่อนหลัง (สมมติว่าไม่มี `defer` หรือ `async`)

```html
<head>
    <script>
        console.log("A: in head");
    </script>
</head>
<body>
    <script>
        console.log("B: top of body");
    </script>

    <p>Some content</p>

    <script>
        console.log("C: bottom of body");
    </script>
</body>
```

**Exercise 3: Variable Scope Across script Tags**

โค้ดนี้มี `<script>` สองตัวแยกกันในไฟล์ HTML เดียว ทายว่า `console.log` บรรทัดสุดท้ายจะพิมพ์อะไร (หรือ error หรือไม่)

```html
<script>
    let sharedValue = "Hello";
</script>

<script>
    console.log(sharedValue);
</script>
```

**Exercise 4: defer vs async**

จับคู่สถานการณ์กับ attribute ที่เหมาะสมที่สุด (`defer`, `async`, หรือไม่ต้องใส่เลย)

- สถานการณ์ A: script ที่ต้องรอให้ HTML ทั้งหน้า parse เสร็จก่อน และต้องรันตามลำดับกับ script อื่น (เช่น ต้องพึ่งพา DOM element ที่อยู่ท้ายหน้า)
- สถานการณ์ B: script วิเคราะห์ (analytics) ที่ไม่สนใจ DOM เลย และไม่แคร์ลำดับการรันกับ script อื่น อยากให้โหลดเร็วที่สุด
- สถานการณ์ C: script เล็กๆ ที่วางไว้ท้ายสุดของ `<body>` อยู่แล้ว (หลัง content ทั้งหมด)

**Exercise 5: Debug ตำแหน่ง script ที่ผิด**

โค้ดนี้ตั้งใจจะเปลี่ยนสีข้อความใน `<p id="msg">` แต่ขึ้น error ว่า `Cannot set properties of null (setting 'style')` ให้บอกว่าปัญหาคืออะไร และแก้ได้ 2 วิธี (บอกมาทั้งสองวิธี)

```html
<head>
    <script>
        let el = document.getElementById("msg");
        el.style.color = "red";
    </script>
</head>
<body>
    <p id="msg">Hello World</p>
</body>
```

### :spider_web: 1.4 Implement exception handling

**Exercise 1: Predict the Output**

```javascript
try {
    console.log("A");
    let result = notDefinedVariable + 1;
    console.log("B");
} catch (error) {
    console.log("C: " + error.name);
} finally {
    console.log("D");
}
console.log("E");
```

**Exercise 2: Complete the Code**

เติมโค้ดในช่อง `____` ให้ฟังก์ชันนี้ throw error เมื่อหารด้วย 0 และจับ error นั้นมาแสดงผล

```javascript
function divide(a, b) {
    if (b === 0) {
        ____ new Error("ห้ามหารด้วยศูนย์");
    }
    return a / b;
}

____ {
    let result = divide(10, 0);
    console.log(result);
} ____ (err) {
    console.log("Error: " + err.____);
}
```

**Exercise 3: Debug**

โค้ดนี้ตั้งใจจะให้แสดง "เสร็จสิ้น" ทุกครั้งไม่ว่าจะเกิด error หรือไม่ แต่ไม่ทำงานตามที่ตั้งใจ หาจุดผิดแล้วแก้

```javascript
try {
    let data = JSON.parse("invalid json");
    console.log(data);
} catch (err) {
    console.log("Parse error: " + err.message);
}

console.log("เสร็จสิ้น");
```

**คำใบ้:** ลองคิดว่าถ้าโค้ดใน `try` เปลี่ยนไป (เช่น สมมติว่ามี `return` อยู่ข้างในฟังก์ชัน) โค้ดปัจจุบันจะยังการันตีได้ไหมว่า "เสร็จสิ้น" จะแสดงเสมอ

**Exercise 4: Nested try/catch**

ทายว่า `console.log` แต่ละบรรทัดพิมพ์อะไรตามลำดับ

```javascript
function processData(input) {
    try {
        try {
            if (typeof input !== "number") {
                throw new TypeError("Input must be a number");
            }
            console.log("Inner: valid number " + input);
        } catch (innerErr) {
            console.log("Inner catch: " + innerErr.name);
            throw new Error("Re-thrown from inner");
        }
    } catch (outerErr) {
        console.log("Outer catch: " + outerErr.message);
    } finally {
        console.log("Cleanup done");
    }
}

processData("hello");
```

**Exercise 5: Custom Error Class**

เติมโค้ดในช่อง `____` ให้ `registerUser` throw `ValidationError` เมื่อ `username` สั้นกว่า 3 ตัวอักษร แล้ว catch มาแสดงผลโดยเช็คด้วย `instanceof` ว่า error เป็น `ValidationError` หรือไม่

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (username.length < 3) {
        ____ new ValidationError("Username too short");
    }
    console.log("User registered: " + username);
}

try {
    registerUser("ab");
} catch (err) {
    if (err ____ ValidationError) {
        console.log("Validation failed: " + err.message);
    } else {
        console.log("Unknown error: " + err.message);
    }
}
```

**คำใบ้:** `instanceof` ใช้เช็คว่า object ถูกสร้างมาจาก class ไหน เช่น `err instanceof Error` เป็น `true` เสมอถ้า `err` เป็น error object เพราะทุก error สืบทอดมาจาก `Error`

### :cookie: 1.5 Complete and debug code that interacts with the Browser Object Model (BOM)

**Exercise 1: Identify the BOM Object**

บอกว่าแต่ละบรรทัดใช้ BOM object ตัวไหน (`window`, `location`, `history`, `navigator`, `screen`)

```javascript
console.log(screen.width);
location.reload();
console.log(navigator.language);
window.open("https://example.com");
history.go(-1);
```

**Exercise 2: Predict the Return Value**

ทายว่าตัวแปรแต่ละตัวเก็บค่าอะไร (type และค่าโดยประมาณ)

```javascript
let a = confirm("ยืนยันการลบ?");     // user กดปุ่ม "Cancel"
let b = prompt("กรอกอายุ:");          // user กดปุ่ม "Cancel" โดยไม่พิมพ์อะไร
let c = prompt("กรอกชื่อ:");          // user พิมพ์ "Tom" แล้วกด OK
let d = alert("บันทึกสำเร็จ");        // user กดปุ่ม OK
```

**Exercise 3: Debug the Code**

โค้ดนี้ตั้งใจจะ redirect ผู้ใช้ไปหน้า `thankyou.html` หลังกด confirm แต่ไม่ทำงานตามที่ตั้งใจ หาบั๊กแล้วแก้

```javascript
let userConfirmed = confirm("ต้องการดำเนินการต่อหรือไม่?");

if (userConfirmed = true) {
    location.href("thankyou.html");
}
```

**Exercise 4: Complete the Code**

เติมช่องว่างให้ทำงานตามคอมเมนต์

```javascript
// เก็บ URL ปัจจุบันไว้ในตัวแปร currentUrl
let currentUrl = ____;

// ถามชื่อผู้ใช้ ถ้าไม่กรอกอะไรเลย (null หรือ string ว่าง) ให้แสดง alert เตือน
let userName = ____("กรุณากรอกชื่อของคุณ:");

if (____ || ____ === "") {
    ____("คุณยังไม่ได้กรอกชื่อ!");
}

// หน่วงเวลา 3 วินาที แล้วค่อยแสดงข้อความ "หมดเวลา!"
____(() => {
    console.log("หมดเวลา!");
}, ____);
```

**Exercise 5: window กับ Global Scope**

ทายว่าโค้ดนี้พิมพ์อะไร และอธิบายว่าทำไมถึงเป็นแบบนั้น (เกี่ยวกับ `window` ที่เป็น global object)

```javascript
var greeting = "Hello";
let farewell = "Bye";

console.log(window.greeting);
console.log(window.farewell);
console.log(typeof window.greeting);
console.log(typeof window.farewell);
```

**คำใบ้:** ลองนึกถึงความต่างระหว่าง `var` กับ `let`/`const` (เรื่อง scope จากหัวข้อ 1.2) ผสมกับความจริงที่ว่า `window` คือ global object

## :floppy_disk: Domain 2: Variables, Data Types, and Functions :smiley:

### :chicken: 2.1 Declare and use variables of primitive data types

**Exercise 1: Identify the Type**

บอก `typeof` ที่ได้จากแต่ละบรรทัด

```javascript
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));
console.log(typeof NaN);
```

**Exercise 2: Predict the Output (Type Conversion)**

```javascript
console.log(parseInt("42px"));
console.log(parseFloat("3.14abc"));
console.log(Number("  123  "));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number(null));
console.log(Number(undefined));
```

**Exercise 3: Number Formatting**

ทายผลลัพธ์ (เป็น string ทั้งหมด)

```javascript
console.log((5).toFixed(2));
console.log((1234567).toLocaleString());
console.log((0.000123).toPrecision(2));
```

**Exercise 4: Debug the Code**

โค้ดนี้ตั้งใจจะเช็คว่า input เป็นตัวเลขที่ใช้งานได้จริงไหม (ไม่ใช่ NaN) แต่มีบั๊ก หาแล้วแก้

```javascript
function isValidNumber(input) {
    return isNaN(input) === false;
}

console.log(isValidNumber("123"));   // ควรได้ true
console.log(isValidNumber("abc"));   // ควรได้ false
console.log(isValidNumber(""));      // ควรได้ false (แต่โค้ดปัจจุบันให้ true!)
```

**คำใบ้:** ลองคิดว่า `Number("")` ได้ค่าอะไร แล้ว `isNaN()` ทำงานกับค่านั้นยังไง

**Exercise 5: Quote Nesting**

เขียน string ต่อไปนี้ให้ถูกต้องโดยไม่ error (เลือกใช้ quote ให้เหมาะสม หรือใช้ escape character)

```
ข้อความที่ต้องการ: She said, "It's a beautiful day."
```

### :fleur_de_lis: 2.2 Declare and use arrays

**Exercise 1: Multi-dimensional Array และการเข้าถึง**

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, [6, 7]],
    [8, 9]
];
```

เขียน expression ที่เข้าถึงค่าต่อไปนี้จาก `matrix`: (a) ค่า `5` (b) ค่า `7` (c) ค่า `9`

**Exercise 2: Predict the Output (push, pop, shift, unshift และ length)**

ทายค่าของ `arr`, `removed` และ `len` หลังโค้ดนี้รันจบ

```javascript
let arr = [10, 20, 30];

arr.push(40);
arr.unshift(0);
let removed = arr.pop();
arr.shift();

let len = arr.length;

console.log(arr);
console.log(removed);
console.log(len);
```

**Exercise 3: Sorting**

ทายผลลัพธ์

```javascript
console.log([10, 1, 21, 2].sort());

console.log([10, 1, 21, 2].sort((a, b) => a - b));

console.log(["banana", "Apple", "cherry"].sort());
```

**Exercise 4: Debug the Code (Initialization และ Iteration)**

โค้ดนี้ตั้งใจจะสร้าง array ขนาด 5 ที่เก็บเลขยกกำลังสอง (`[0, 1, 4, 9, 16]`) แต่มีบั๊ก หาและแก้ให้ถูกต้อง

```javascript
function squareArray(n) {
    let result = new Array(n);
    for (let i = 0; i <= n; i++) {
        result[i] = i * i;
    }
    return result;
}

console.log(squareArray(5));
```

**คำใบ้:** ลองเช็ค 2 จุด คือเงื่อนไขของลูป และสิ่งที่ `new Array(n)` สร้างขึ้นมาจริงๆ

**Exercise 5: Searching และ Mini Logic**

เขียนฟังก์ชัน `findSecondLargest(arr)` ที่รับ array ของตัวเลข แล้ว return ค่ามากที่สุดอันดับ 2 (ไม่ใช่ค่ามากที่สุด) ของ array นั้น โดยห้ามใช้ `sort()` ให้ลองใช้การวนลูปหรือ `find`/`reduce` แทน

```javascript
function findSecondLargest(arr) {
    // เติมโค้ดตรงนี้
}

console.log(findSecondLargest([3, 7, 2, 9, 4]));  // ควรได้ 7
console.log(findSecondLargest([5, 5, 5]));         // ควรได้ 5 (ถ้ามีค่าซ้ำ ถือว่าอันดับ 2 ก็เป็นค่านั้นได้)
```

### :ticket: 2.3 Complete and debug code that uses objects

**Exercise 1: Methods และ this**

ทายผลลัพธ์ โดยสมมติว่าไฟล์นี้อยู่ใน strict mode

```javascript
"use strict";

const counter = {
    count: 0,
    increment() {
        this.count++;
        return this;
    },
    getCount() {
        return this.count;
    }
};

counter.increment().increment().increment();
console.log(counter.getCount());   // บรรทัด A

const fn = counter.getCount;
console.log(fn());                 // บรรทัด B
```

โจทย์เสริม: ถ้าเอา `"use strict";` ออก บรรทัด B จะเปลี่ยนไปยังไง

**Exercise 2: Instantiation และ Properties**

ทายผลลัพธ์ของทั้ง 5 บรรทัด

```javascript
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }
    describe() {
        return `${this.title} (${this.pages} pages)`;
    }
}

const b1 = new Book("JS Basics", 200);
const b2 = new Book("DOM Guide", 150);

b1.author = "Tom";
delete b2.pages;

console.log(b1.describe());
console.log(b2.describe());
console.log("author" in b2);
console.log(b1.hasOwnProperty("describe"));
console.log(Object.keys(b1));
```

**Exercise 3: ดึงส่วนต่างๆ ของ Date**

ทายผลลัพธ์

```javascript
const d = new Date(2026, 11, 25, 18, 30, 45);

console.log(d.getFullYear());   // a
console.log(d.getMonth());      // b
console.log(d.getDate());       // c
console.log(d.getDay());        // d  (วันที่ 25 ธ.ค. 2026 ตรงกับวันศุกร์)
console.log(d.getHours());      // e

console.log(new Date(2026, 12, 1).getFullYear());   // f
console.log(new Date(2026, 12, 1).getMonth());      // g
```

**Exercise 4: Debug การบวกวันที่และหาผลต่าง**

โค้ดนี้มี 2 บั๊ก หาให้เจอแล้วแก้

```javascript
function addDays(date, days) {
    const result = date;
    result.setDate(result.getDate() + days);
    return result;
}

function daysBetween(a, b) {
    return (b - a) / 1000 * 60 * 60 * 24;
}

const start = new Date(2026, 0, 31);        // 31 ม.ค. 2026
const deadline = addDays(start, 30);

console.log(start.toLocaleDateString("en-GB"));     // ควรได้ 31/01/2026
console.log(deadline.toLocaleDateString("en-GB"));  // ควรได้ 02/03/2026
console.log(daysBetween(start, deadline));          // ควรได้ 30
```

**คำใบ้:** บั๊กหนึ่งอาจถูกอีกบั๊กบังไว้ ลองรันโค้ดเดิมดูผลก่อน แล้วแก้ทีละจุด รันซ้ำทุกครั้งว่าผลเปลี่ยนไปยังไง

**Exercise 5: Localization (MM/DD vs DD/MM)**

เติมช่องว่างให้ได้ผลตามคอมเมนต์ (ค่าที่คาดหวังอ้างอิง browser หรือ Node.js สมัยใหม่ ซึ่ง MDN เตือนว่าผลลัพธ์อาจต่างกันได้บ้างระหว่าง implementation)

```javascript
const date = new Date(2026, 9, 5);   // 5 ตุลาคม 2026

console.log(date.toLocaleDateString("____"));    // a) "10/5/2026"
console.log(date.toLocaleDateString("____"));    // b) "05/10/2026"

console.log(date.toLocaleDateString("en-US", {
    ____: "2-digit", ____: "2-digit", ____: "numeric"
}));                                             // c) "10/05/2026"

console.log(date.toLocaleDateString("en-US", {
    ____: "long", ____: "numeric", ____: "long", ____: "numeric"
}));                                             // d) "Monday, October 5, 2026"
```