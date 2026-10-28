# :bulb: รวมเฉลยแบบทดสอบท้ายบทเรียน :vertical_traffic_light:
:house: [กลับไปที่หน้าแรก](/README.md)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp; ไฟล์นี้คือการรวบรวมเฉลยของคำถามท้ายบทเรียนทั้งหมดตั้งแต่หัวข้อย่อยที่ 1.1 - 1.5 ใน Domain ที่ 1 และหัวข้อย่อยที่ 2.1 - 2.3 ใน Domain ที่ 2
## :point_up: วิธีการอ่านเฉลย :thinking:
&nbsp;&nbsp;&nbsp;&nbsp;ผลลัพธ์ของแบบทดสอบท้ายบทเรียนนั้น ส่วนมากจะมีการตอบคำตอบทั้งหมด 2 ประเภท ได้แก่
1. **การคอมเมนต์ตอบ:** การตอบประเภทที่ 1 นี้จะเกิดขึ้นในโจทย์ที่มีลักษณะคำถามประมาณว่าผลลัพธ์ของการทำงานในบรรทัดนั้นๆ คืออะไร หรือฟังก์ชัน และลักษณะของการทำงานนั้นให้ผลลัพธ์เป็นอย่างไร โดยคำตอบของคำถามประเภทนี้จะอยู่หลังเครื่องหมาย `//` ดังนั้นแล้วหากต้องการจะอ่านคำตอบ ให้พยายามค้นหาเครื่องหมายนี้ในคำถามข้อนั้นๆ
2. **การเขียนโค้ดตอบ:** การเขียนโค้ดตอบนั้นจะเป็นการเขียนโค้ดเพื่อเติมช่องว่าง หรือการสร้างระบบการทำงาน เพื่อบรรลุเป้าหมายของคำถามข้อนั้นๆ ดังนั้นแล้วหากผู้อ่านอ่านคำถามแล้ว แล้วคำถามไม่ได้มีลักษณะการถามดังคำตอบประเภทบน นั่นหมายความว่าสิ่งที่ผู้อ่านเห็นอยู่นั้นคือคำตอบ โดยไม่จำเป็นต้องไปหาสัญลักษณ์ `//` ใดๆ เพราะในกรณีของคำถามประเภทที่ต้องการให้เขียนโค้ดตอบ ส่วนมากสิ่งที่อยู่หลังเครื่องหมาย `//` คือการเขียนอธิบายการทำงาน
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
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Predict the Output**

ทายว่า `console.log` แต่ละบรรทัดจะพิมพ์อะไร

```javascript
let a = 10;
let b = 3;

console.log(a % b);        // 1
console.log(a / b);        // 3.3333333333333335

let x = 5;
console.log(x++);          // 5
console.log(x);            // 6
console.log(++x);          // 7

let msg = "Score: " + 10 + 5;
console.log(msg);          // Score: 105
```

**Exercise 2: Debug the Code**

โค้ดนี้ตั้งใจจะเพิ่มคะแนน (score) ทีละ 5 แต้ม แล้วหักค่าปรับ (penalty) 10% ของคะแนนรวม แต่มีบั๊ก 2 จุด หาให้เจอแล้วแก้

```javascript
let score = 100;
let bonus = 5;

score += bonus;        // ต้องการ: score += bonus
let penalty = score * (10 / 100);
score -= penalty;      // ต้องการ: score -= penalty

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

total += (itemPrice * quantity);  // เพิ่ม total ตามราคา x จำนวน
total -= discount;                  // หักส่วนลด
let tax = total * taxRate;
total += tax;                       // บวกภาษี

console.log(total);
```

### :goat: 1.2 Apply JavaScript best practices
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Find the Bugs (Naming และ Keywords)**

โค้ดนี้มีปัญหาเรื่อง naming convention และ reserved keyword อยู่ 4 จุด หาให้เจอแล้วแก้

```javascript
const MAX_SCORE = 100;
let ndPlace = 85;
let status = "done";
let user_name = "Alex";

console.log(MAX_SCORE, ndPlace, status, user_name);
```

**Exercise 2: const vs let**

ทำนายว่าบรรทัดไหนจะเกิด Error และ error ประเภทไหน

```javascript
const PI = 3.14;
PI = 3.14159;              // เกิด Error เนื่องจาก ตัวแปร const ไม่สามารถทำการ re-assign ค่าใหม่ได้

const person = { name: "Tom" };
person.name = "Jerry";     // ไม่เกิด Error
console.log(person.name);

let counter = 0;
counter = counter + 1;     // ไม่เกิด Error
```

**Exercise 3: Refactor for Best Practices**

โค้ดนี้ทำงานถูกต้อง แต่เขียนแย่มาก (ไม่มี comment, naming ไม่ดี, ใช้ `var`, ไม่มี indentation) ให้ refactor ตาม best practice ที่เรียนมา โดยผลลัพธ์ต้องเหมือนเดิม

```javascript
const X = 10;
const Y = 20;

const z = X + Y; // Plus operator between X and Y

// Show result
console.log(z);
```

**Exercise เสริม: Prefer const**

โค้ดนี้ทำงานถูกต้อง แต่ใช้ `let` ทุกตัวแปรโดยไม่ได้เลือกอย่างเหมาะสม อ่านโค้ดทั้งหมดแล้วตัดสินใจว่าตัวแปรไหนควรเป็น `const` และตัวไหนต้องเป็น `let` จริงๆ จากนั้นเขียนโค้ดใหม่ทั้งหมดตามหลัก prefer const

```javascript
const STORE_NAME = "Coffee Corner";
const PRICE_PER_CUP = 45;
let cupsOrdered = 3;
let totalPrice = PRICE_PER_CUP * cupsOrdered;
const DISCOUNT_RATE = 0.1;

if (cupsOrdered >= 3) {
    totalPrice = totalPrice - (totalPrice * DISCOUNT_RATE);
}

const receipt = STORE_NAME + ": " + totalPrice + " baht";
console.log(receipt);

const TAX_RATE = 0.07;
let finalPrice = totalPrice;
finalPrice = finalPrice + (finalPrice * TAX_RATE);

console.log(finalPrice);
```

**คำใบ้:** ไล่หาทีละตัวแปรว่ามีบรรทัดไหนเขียนทับค่าเดิมหรือไม่ (มีเครื่องหมาย `=` เกิดขึ้นอีกครั้งหลังประกาศครั้งแรก โดยไม่ใช่ `==` หรือ `===`)

### :white_check_mark: 1.3 Evaluate the use of internal and external scripts
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Identify the Type**

บอกว่าโค้ดแต่ละส่วนเป็น script ประเภทไหน (Inline / Internal / External) และอันไหนเป็น best practice มากที่สุดสำหรับโปรเจกต์ขนาดใหญ่ พร้อมเหตุผลสั้นๆ

```html
<!-- A - Inline script -->
<button onclick="console.log('clicked')">Click</button>

<!-- B - Internal script -->
<script>
    let x = 5;
    console.log(x);
</script>

<!-- C - External script -->
<script src="main.js"></script>
```

**Exercise 2: Predict Execution Order**

เรียงลำดับว่า `console.log` ไหนรันก่อนหลัง (สมมติว่าไม่มี `defer` หรือ `async`)

**เฉลย**: script ทั้งหมดจะทำการรันตามลำดับตั้งแต่บน - ล่าง เนื่องจากการทำงานของ script คือ เจอก่อน ก็รันก่อนจนกว่าจะเสร็จ แล้วค่อยไป parse html ต่อ

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
    let sharedValue = "Hello from different script <tag>";
</script>

<script>
    console.log(sharedValue); // "Hello from different script <tag>"
</script>
```

**Exercise 4: defer vs async**

จับคู่สถานการณ์กับ attribute ที่เหมาะสมที่สุด (`defer`, `async`, หรือไม่ต้องใส่เลย)

- สถานการณ์ A **(คำตอบ defer)**: script ที่ต้องรอให้ HTML ทั้งหน้า parse เสร็จก่อน และต้องรันตามลำดับกับ script อื่น (เช่น ต้องพึ่งพา DOM element ที่อยู่ท้ายหน้า)
- สถานการณ์ B **(คำตอบ async)**: script วิเคราะห์ (analytics) ที่ไม่สนใจ DOM เลย และไม่แคร์ลำดับการรันกับ script อื่น อยากให้โหลดเร็วที่สุด
- สถานการณ์ C **(คำตอบ ไม่ต้องใส่อะไรเลย)**: script เล็กๆ ที่วางไว้ท้ายสุดของ `<body>` อยู่แล้ว (หลัง content ทั้งหมด)

**Exercise 5: Debug ตำแหน่ง script ที่ผิด**

โค้ดนี้ตั้งใจจะเปลี่ยนสีข้อความใน `<p id="msg">` แต่ขึ้น error ว่า `Cannot set properties of null (setting 'style')` ให้บอกว่าปัญหาคืออะไร และแก้ได้ 2 วิธี (บอกมาทั้งสองวิธี)

**เฉลย**
<br>วิธีที่ 1: คือการเติม addEventListener เข้าไปหลังจากที่ DOMContentLoaded ทำงานเสร็จแล้ว หรือก็คือโครงหน้าโหลดเสร็จแล้ว<br>
วิธีที่ 2: คือการย้าย `<script>` tag เอาไปไว้หลัง `</body>`

```html
<head>
    <script>
        document.addEventListener("DOMContentLoaded", function(){
            let el = document.getElementById("msg");
            el.style.color = "red";
        });
    </script>
</head>
<body>
    <p id="msg">Hello World</p>
</body>
```

### :spider_web: 1.4 Implement exception handling
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

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

// Predict output
// A -> C: ReferenceError -> D -> E
```

**Exercise 2: Complete the Code**

เติมโค้ดในช่อง `____` ให้ฟังก์ชันนี้ throw error เมื่อหารด้วย 0 และจับ error นั้นมาแสดงผล

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("ห้ามหารด้วยศูนย์");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (err) {
    console.log("Error: " + err.message);
}
```

**Exercise 3: Debug**

โค้ดนี้ตั้งใจจะให้แสดง "เสร็จสิ้น" ทุกครั้งไม่ว่าจะเกิด error หรือไม่ แต่ไม่ทำงานตามที่ตั้งใจ หาจุดผิดแล้วแก้

```javascript
function parseData() {
    try {
        let data = JSON.parse("invalid json");
        console.log(data);
    } catch (err) {
        return null;
    } finally {
        console.log("เสร็จสิ้น");
    }
}
parseData();
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
            console.log("Inner catch: " + innerErr.name); // Inner catch: TypeError
            throw new Error("Re-thrown from inner");
        }
    } catch (outerErr) {
        console.log("1-Outer catch: " + outerErr.name); // outer catch: Re-thrown from inner
        console.log("2-Outer catch: " + outerErr.message); // outer catch: Re-thrown from inner
    } finally {
        console.log("Cleanup done"); // cleanup done
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
        throw new ValidationError("Username too short");
    }
    console.log("User registered: " + username);
}

try {
    registerUser("ab");
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Validation failed: " + err.message);
    } else {
        console.log("Unknown error: " + err.message);
    }
}
```

**คำใบ้:** `instanceof` ใช้เช็คว่า object ถูกสร้างมาจาก class ไหน เช่น `err instanceof Error` เป็น `true` เสมอถ้า `err` เป็น error object เพราะทุก error สืบทอดมาจาก `Error`

### :cookie: 1.5 Complete and debug code that interacts with the Browser Object Model (BOM)
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Identify the BOM Object**

บอกว่าแต่ละบรรทัดใช้ BOM object ตัวไหน (`window`, `location`, `history`, `navigator`, `screen`)

```javascript
console.log(screen.width); // Screen Object
location.reload(); // Location Object
console.log(navigator.language); // Navigator Object
window.open("https://example.com"); // Window Object
history.go(-1); // History Object
```

**Exercise 2: Predict the Return Value**

ทายว่าตัวแปรแต่ละตัวเก็บค่าอะไร (type และค่าโดยประมาณ)

```javascript
let a = confirm("ยืนยันการลบ?");     // user กดปุ่ม "Cancel" -> false
let b = prompt("กรอกอายุ:");          // user กดปุ่ม "Cancel" โดยไม่พิมพ์อะไร -> null
let c = prompt("กรอกชื่อ:");          // user พิมพ์ "Tom" แล้วกด OK -> string
let d = alert("บันทึกสำเร็จ");        // user กดปุ่ม OK -> undefined
```

**Exercise 3: Debug the Code**

โค้ดนี้ตั้งใจจะ redirect ผู้ใช้ไปหน้า `thankyou.html` หลังกด confirm แต่ไม่ทำงานตามที่ตั้งใจ หาบั๊กแล้วแก้

```javascript
let userConfirmed = confirm("ต้องการดำเนินการต่อหรือไม่?");

if (userConfirmed = true) {
    location.assign("./thankyou.html");
}
```

**Exercise 4: Complete the Code**

เติมช่องว่างให้ทำงานตามคอมเมนต์

```javascript
// เก็บ URL ปัจจุบันไว้ในตัวแปร currentUrl
let currentUrl = location.href;

// ถามชื่อผู้ใช้ ถ้าไม่กรอกอะไรเลย (null หรือ string ว่าง) ให้แสดง alert เตือน
let userName = prompt("กรุณากรอกชื่อของคุณ:");

if (userName || userName === "") {
    alert("คุณยังไม่ได้กรอกชื่อ!");
}

// หน่วงเวลา 3 วินาที แล้วค่อยแสดงข้อความ "หมดเวลา!"
setTimeout(() => {
    console.log("หมดเวลา!");
}, 3000);
```

**Exercise 5: window กับ Global Scope**

ทายว่าโค้ดนี้พิมพ์อะไร และอธิบายว่าทำไมถึงเป็นแบบนั้น (เกี่ยวกับ `window` ที่เป็น global object)

```javascript
var greeting = "Hello";
let farewell = "Bye";

console.log(window.greeting); // "Hello"
console.log(window.farewell); // undefined
console.log(typeof window.greeting); // "string"
console.log(typeof window.farewell); // undefined
```

**คำใบ้:** ลองนึกถึงความต่างระหว่าง `var` กับ `let`/`const` (เรื่อง scope จากหัวข้อ 1.2) ผสมกับความจริงที่ว่า `window` คือ global object

## :floppy_disk: Domain 2: Variables, Data Types, and Functions :smiley:

### :chicken: 2.1 Declare and use variables of primitive data types
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Identify the Type**

บอก `typeof` ที่ได้จากแต่ละบรรทัด

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof NaN); // "number"
```

**Exercise 2: Predict the Output (Type Conversion)**

```javascript
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14abc")); // 3.14
console.log(Number("  123  ")); // 123
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
```

**Exercise 3: Number Formatting**

ทายผลลัพธ์ (เป็น string ทั้งหมด)

```javascript
console.log((5).toFixed(2)); // "5.00"
console.log((1234567).toLocaleString()); // "1,234,567"
console.log((0.000123).toPrecision(2)); // 0.00012
```

**Exercise 4: Debug the Code**

โค้ดนี้ตั้งใจจะเช็คว่า input เป็นตัวเลขที่ใช้งานได้จริงไหม (ไม่ใช่ NaN) แต่มีบั๊ก หาแล้วแก้

```javascript
function isValidNumber(input) {
    return input !== "" && !Number.isNan(Number(input));
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

คำตอบ "She said, \"It's a beautiful day.\"" หรือ `She said, "It's a beautiful day."`
```

### :fleur_de_lis: 2.2 Declare and use arrays
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

**Exercise 1: Multi-dimensional Array และการเข้าถึง**

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, [6, 7]],
    [8, 9]
];
// เขียน expression เพื่อเข้าถึงค่าต่างๆ ใน matrix
// ค่า 5
console.log(matrix[1][1]);
// ค่า 7
console.log(matrix[1][2][1]);
// ค่า 9
console.log(matrix[2][1]);

```

เขียน expression ที่เข้าถึงค่าต่อไปนี้จาก `matrix`: (a) ค่า `5` (b) ค่า `7` (c) ค่า `9`

**Exercise 2: Predict the Output (push, pop, shift, unshift และ length)**

ทายค่าของ `arr`, `removed` และ `len` หลังโค้ดนี้รันจบ

```javascript
let arr = [10, 20, 30];

arr.push(40); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 4 -> [10, 20, 30, 40]
arr.unshift(0); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 5 -> [0, 10, 20, 30, 40]
let removed = arr.pop(); // 40 -> [0, 10, 20, 30]
arr.shift(); // ไม่มีตัวแปรเก็บค่า แต่ว่าผลลัพธ์ที่ได้จากบรรทัดนี้คือ 0 -> [10, 20, 30]

let len = arr.length;

console.log(arr); // Array (3) [10, 20, 30]
console.log(removed); // 40
console.log(len); // 3
```

**Exercise 3: Sorting**

ทายผลลัพธ์

```javascript
console.log([10, 1, 21, 2].sort()); // Array (4) [1, 10, 2, 21]

console.log([10, 1, 21, 2].sort((a, b) => a - b)); // Array (4) [1, 2, 10, 21]

console.log(["banana", "Apple", "cherry"].sort()); // Array (3) ["Apple", "banana", "cherry"]
```

**Exercise 4: Debug the Code (Initialization และ Iteration)**

โค้ดนี้ตั้งใจจะสร้าง array ขนาด 5 ที่เก็บเลขยกกำลังสอง (`[0, 1, 4, 9, 16]`) แต่มีบั๊ก หาและแก้ให้ถูกต้อง

```javascript
function squareArray(n) {
    let result = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
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
    let first_largest = -Infinity;
    let second_largest = -Infinity;

    for (const x of arr){
        if (x > first_largest){
            second_largest = first_largest;
            first_largest = x;
        }else if (x < first_largest && x > second_largest){
            second_largest = x;
        }
    }
    return (second_largest === -infinity) ? first_largest : second_largest;
}

console.log(findSecondLargest([3, 7, 2, 9, 4]));  // ควรได้ 7
console.log(findSecondLargest([5, 5, 5]));         // ควรได้ 5 (ถ้ามีค่าซ้ำ ถือว่าอันดับ 2 ก็เป็นค่านั้นได้)
```

### :ticket: 2.3 Complete and debug code that uses objects
:otter: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

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
console.log(counter.getCount());   // 3

const fn = counter.getCount;
console.log(fn());                 // TypeError: Cannot read properties of undefined (reading 'count')
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

console.log(b1.describe()); // JS Basics (200 pages)
console.log(b2.describe()); // DOM Guided (undefined pages)
console.log("author" in b2); // false
console.log(b1.hasOwnProperty("describe")); // false
console.log(Object.keys(b1)); // ['title', 'pages', 'author']
```

**Exercise 3: ดึงส่วนต่างๆ ของ Date**

ทายผลลัพธ์

```javascript
const d = new Date(2026, 11, 25, 18, 30, 45);

console.log(d.getFullYear());   // 2026
console.log(d.getMonth());      // 11
console.log(d.getDate());       // 25
console.log(d.getDay());        // 5
console.log(d.getHours());      // 18

console.log(new Date(2026, 12, 1).getFullYear());   // 2027
console.log(new Date(2026, 12, 1).getMonth());      // 0
```

**Exercise 4: Debug การบวกวันที่และหาผลต่าง**

โค้ดนี้มี 2 บั๊ก หาให้เจอแล้วแก้

```javascript
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
```

**คำใบ้:** บั๊กหนึ่งอาจถูกอีกบั๊กบังไว้ ลองรันโค้ดเดิมดูผลก่อน แล้วแก้ทีละจุด รันซ้ำทุกครั้งว่าผลเปลี่ยนไปยังไง

**Exercise 5: Localization (MM/DD vs DD/MM)**

เติมช่องว่างให้ได้ผลตามคอมเมนต์ (ค่าที่คาดหวังอ้างอิง browser หรือ Node.js สมัยใหม่ ซึ่ง MDN เตือนว่าผลลัพธ์อาจต่างกันได้บ้างระหว่าง implementation)

```javascript
const date = new Date(2026, 9, 5);   // 5 ตุลาคม 2026

console.log(date.toLocaleDateString("en-US"));    // a) "10/5/2026"
console.log(date.toLocaleDateString("en-GB"));    // b) "05/10/2026"

console.log(date.toLocaleDateString("en-US", {
    month: "2-digit", day: "2-digit", year: "numeric"
}));                                             // c) "10/05/2026"

console.log(date.toLocaleDateString("en-US", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
}));                                             // d) "Monday, October 5, 2026"
```