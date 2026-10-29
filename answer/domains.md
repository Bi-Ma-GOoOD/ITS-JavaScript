# :zap: รวมเฉลยแบบทดสอบท้าย Objective domain :rainbow:
:house: [กลับไปที่หน้าแรก](/README.md)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp; ไฟล์นี้คือการรวบรวมเฉลยของโจทย์สำหรับการสร้างโปรแกรมขนาดเล็ก (Mini - Project) โดยวัตถุประสงค์ของการสร้างโปรแกรมขนาดเล็ก คือการทำให้ผู้เรียนได้มีความเข้าใจในความหมายโดยรวมของ Domain นั้นๆ ได้อย่างเข้าใจมากยิ่งขึ้น และสามารถนำความรู้ที่มีมาประยุกต์ใช้ในการสร้างโปรแกรมต่างๆ เพื่อช่วยแก้ไขปัญหาในโลกความจริง ด้วยความรู้ที่ได้รับมา
## :point_up: วิธีการอ่านเฉลย :thinking:
&nbsp;&nbsp;&nbsp;&nbsp;การอ่านเฉลยของแบบทดสอบท้าย Objective domain คือการอ่านโค้ดที่เขียนอยู่ ว่าโค้ดที่มีการเขียนนั้นส่วนไหนที่สื่อถึงข้อกำหนดที่ได้มีการระบุเอาไว้ นอกจากนี้การอ่านการตั้งชื่อตัวแปร การเลือกใช้ประเภทการประกาศข้อมูลของตัวแปรตัวนั้นๆ ก็จะสามารถทำให้เข้าใจได้ว่า เพราะเหตุใด ทำไมตัวแปรนี้ถึงใช้ const, let หรือแม้กระทั่งการตั้งชื่อตัวแปรที่สอดคล้องกับการทำงานของตัวแปรนั้นๆ<br>
&nbsp;&nbsp;&nbsp;&nbsp;นอกจากการอ่านโค้ดแล้ว การอ่านคอมเมนต์ก็จะช่วยให้ผู้อ่านสามารถเข้าใจกลไกการทำงานของโค้ดได้ดีมากยิ่งขึ้น ว่าโค้ดชุดที่ผู้อ่านกำลังอ่านอยู่นั้น มีวัตถุประสงค์การทำงานเป็นอย่างไร และให้ผลลัพธ์ออกมาเป็นอะไร
## :large_orange_diamond: สารบัญ :corn:
* :heavy_plus_sign: [Domain 1: JavaScript Operators, Methods, and Keywords](#heavy_plus_sign-domain-1-javascript-operators-methods-and-keywords-old_key)
* :floppy_disk: [Domain 2: Variables, Data Types, and Functions](#floppy_disk-domain-2-variables-data-types-and-functions-smiley)
* :sloth: [Domain 3: Decisions and Loops](#sloth-domain-3-decisions-and-loops-christmas_tree)
* :flying_saucer: [Domain 4: Document Object Model](#flying_saucer-domain-4-document-object-model-comet)
* :sparkler: [Domain 5: HTML Forms](#sparkler-domain-5-html-forms-blush)

## :heavy_plus_sign: Domain 1: JavaScript Operators, Methods, and Keywords :old_key:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ระบบคำนวณใบเสร็จร้านกาแฟ (Coffee Shop Receipt System)

&nbsp;&nbsp;&nbsp;&nbsp;เขียนโปรแกรมที่ให้ผู้ใช้กรอกชื่อและจำนวนแก้วกาแฟที่จะสั่ง แล้วคำนวณราคาพร้อมส่วนลดและภาษี จากนั้นแสดงใบเสร็จ ถ้ากรอกข้อมูลผิด (เช่น ไม่ใช่ตัวเลข หรือค่าติดลบ) ให้แสดง error message ที่เหมาะสมแทนที่จะปล่อยให้โปรแกรม crash

**เฉลย**
- ไฟล์: **scripts.js**

```javascript
// Coffee Shop Receipt System

// Custom Error: สำหรับการแสดง error เมื่อผู้ใช้งานพิมพ์ข้อความที่ไม่ใช่ตัวเลข เข้ามาในช่องรับจำนวนแก้วกาแฟ
class QuantityTypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "QuantityTypeError";
    }
}
// Custom Error: สำหรับการแสดง error เมื่อผู้ใช้งานพิมพ์ช่วงตัวเลขของจำนวนแก้วกาแฟติดลบ หรือเป็น 0
class QuantityRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = "QuantityRangeError";
    }
}
// ฟังก์ชันการคำนวณราคากาแฟที่สั่งในออเดอร์นั้นๆ
function calculate_cost(coffee_amount) {
    const COFFEE_PRICE = 45; // ราคาแก้วกาแฟ 1 แก้ว
    // ทำให้ค่า coffee_amount ที่ได้รับเข้ามาถูก trunc() ให้เป็นจำนวนเต็ม เพราะกาแฟต้องสั่งเต็มแก้ว
    let cost = coffee_amount * COFFEE_PRICE; // ราคารวมเริ่มต้นก่อนหักส่วนลด
    // ตรวจสอบว่าลูกค้าสั่งกาแฟ มากกว่า 3 แก้วหรือไม่
    if (coffee_amount >= 3) {
        cost -= (cost * 0.1);
    }
    cost += (cost * 0.07);
    return cost;
}
// ฟังก์ชันการแสดงข้อมูลใบเสร็จ
function slip_template(customer_name, coffee_amount, total_cost) {
    return `Customer Name: ${customer_name}\nQuantity: ${coffee_amount} cups\nTotal cost: ${total_cost} baht.`; 
}

try {
    const customerName = prompt("Custormer name:"); // รับชื่อลูกค้าผู้สั่งออเดอร์
    const rawCoffeeAmount = prompt("Quantity: "); // รับค่าจำนวนของแก้วกาแฟ
    // ตรวจสอบอินพุตของตัวแปร COFFEE_AMOUNT
    if (rawCoffeeAmount === "" || rawCoffeeAmount === null || isNaN(Number(rawCoffeeAmount))) { // ตรวจสอบว่าค่าอินพุตที่ใส่เข้ามาเป็นค่าว่าง, null และเป็นตัวอักษรหรือไม่
        throw new QuantityTypeError("Coffee amount must be number only.");
    } else if (Number(rawCoffeeAmount) <= 0) { // ตรวจสอบว่าอินพุตที่กรอกเข้ามามีค่าน้อยกว่าหรือเท่ากับ 0 หรือไม่
        throw new QuantityRangeError("Coffee amount must be positive number.");
    }
    // แปลงค่า string -> number และปัดเลขทศนิยมทิ้ง
    const coffeeAmount = Math.trunc(Number(rawCoffeeAmount));
    // ถามลูกค้าเพื่อยืนยันการสั่งซื้อ
    const orderConfirm = confirm("Order confirmation?");
    if (orderConfirm){
        // เรียกฟังก์ชันสำหรับการคำนวณราคาออเดอร์
        const totalCost = calculate_cost(coffeeAmount)
        // เรียกฟังก์ชันสำหรับการแสดงรูปแบบใบเสร็จ
        const slip = slip_template(customerName, coffeeAmount, totalCost);
        // แสดงใบเสร็จ
        alert(slip);
    } else {
        alert("Order cancelled.") // แสดงข้อความยกเลิกการสั่งออเดอร์
    }
} catch(err) {
    console.error(`${err.name}: ${err.message}`);
    alert(`${err.name}: ${err.message}`); // แสดงข้อความ error ที่ได้จากการ Throw error
} finally {
    alert("Thank you for using our service."); // แสดงข้อความขอบคุณที่ใช้บริการ
    setTimeout(() =>{
        location.replace("./index.html") // ทำให้ระบบกลับไปทำงานที่หน้าแรกอีกรอบ
    }, 10000);
}
```
## :floppy_disk: Domain 2: Variables, Data Types, and Functions :smiley:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ระบบสรุปผลการเรียนนักเรียน (Student Grade Report)
&nbsp;&nbsp;&nbsp;&nbsp;เขียนโปรแกรมที่เก็บข้อมูลนักเรียนหลายคน (ชื่อและคะแนนสอบหลายวิชา) แล้วคำนวณคะแนนเฉลี่ย คะแนนสูงสุด/ต่ำสุด และตัดเกรดของนักเรียนแต่ละคน จากนั้นสรุปว่าใครได้คะแนนเฉลี่ยสูงสุดและมีใครสอบไม่ผ่านบ้าง โดยแสดงผลที่ Console

**เฉลย**
- ไฟล์: **index.html**

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Domain 2 - Student Grade Report</title>
</head>
<body>
  <h1>Student Grade Report</h1>
  <p>เปิด Console (F12) เพื่อดูผลลัพธ์</p>

  <!-- วาง script ไว้ท้าย body เพื่อให้ HTML โหลดเสร็จก่อน -->
  <script defer src="./scripts.js"></script>
</body>
</html>
```

- ไฟล์: **scripts.js**

```javascript
// ===== 2.1 ตัวแปร primitive =====
const SCHOOL_NAME = "Code Academy";   // string
const PASS_SCORE = 50;                // number
let totalStudents = 0;                // number
let hasFailedStudent = false;         // boolean
let topStudent = null;                // null (ยังไม่มีค่า)
let notAssigned;                      // undefined (ประกาศแต่ไม่ใส่ค่า)

console.log(typeof SCHOOL_NAME, typeof PASS_SCORE, typeof hasFailedStudent,
            typeof topStudent, typeof notAssigned);
// string number boolean object undefined (null ให้ typeof เป็น "object" เป็นข้อสอบชอบถาม)

// ===== 2.2 + 2.3 Array ของ Object =====
const students = [
  { name: "สมชาย", scores: [80, 75.5, 90] },
  { name: "สมหญิง", scores: [65, 70, 72] },
  { name: "ปิติ", scores: [55, 60, 58] }
];

// ===== 2.5 Functions =====

// รับ array คะแนน -> return ค่าเฉลี่ย (ปัดทศนิยม 2 ตำแหน่ง)
function calculateAverage(scores) {
  let sum = 0;
  for (const s of scores) {
    sum += s;
  }
  return Math.round((sum / scores.length) * 100) / 100; // 2.4 Math.round
}

// รับค่าเฉลี่ย -> return เกรด
function getGrade(avg) {
  if (avg >= 80) return "A";
  if (avg >= 70) return "B";
  if (avg >= 60) return "C";
  if (avg >= 50) return "D";
  return "F";
}

// รับ object นักเรียน -> return object สรุปผล
function buildReport(student) {
  const avg = calculateAverage(student.scores);
  return {
    name: student.name,
    average: avg,
    highest: Math.max(...student.scores), // 2.4 spread array เข้า Math.max
    lowest: Math.min(...student.scores),
    grade: getGrade(avg),
    passed: avg >= PASS_SCORE
  };
}

// ===== ส่วนทำงานหลัก =====
students.push({ name: "มานี", scores: [45, 50, 38] }); // 2.2 เพิ่มสมาชิกใน array
totalStudents = students.length;

console.log(`===== ${SCHOOL_NAME}: รายงานผลการเรียน =====`);

for (const student of students) {
  const r = buildReport(student);
  let line = `${r.name} | เฉลี่ย: ${r.average} | สูงสุด: ${r.highest} | ต่ำสุด: ${r.lowest} | เกรด: ${r.grade} | `;

  if (r.passed) {
    line += "ผ่าน";
  } else {
    hasFailedStudent = true;
    const need = Math.ceil(PASS_SCORE - r.average); // 2.4 Math.ceil
    line += `ไม่ผ่าน (ต้องเพิ่มอีก ${need} คะแนน)`;
  }
  console.log(line);

  // หานักเรียนที่เฉลี่ยสูงสุด
  if (topStudent === null || r.average > topStudent.average) {
    topStudent = r;
  }
}

console.log("-----------------------------------------");
console.log(`นักเรียนทั้งหมด: ${totalStudents} คน`);
console.log(`เฉลี่ยสูงสุด: ${topStudent.name} (${topStudent.average})`);
console.log(`มีนักเรียนสอบตก: ${hasFailedStudent}`);
```
## :sloth: Domain 3: Decisions and Loops :christmas_tree:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: เกมทายตัวเลข (Number Guessing Game)
&nbsp;&nbsp;&nbsp;&nbsp;เขียนเกมที่คอมพิวเตอร์สุ่มเลข 1-100 แล้วให้ผู้เล่นทาย โดยโปรแกรมจะบอกใบ้ว่า "มากไป/น้อยไป/ใกล้มากแล้ว" และจำกัดจำนวนครั้งตามระดับความยาก เมื่อจบเกมให้สรุปผลและถามว่าจะเล่นอีกรอบหรือไม่

**เฉลย**
- ไฟล์: **index.html**

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Domain 3 - Number Guessing Game</title>
</head>
<body>
  <h1>Number Guessing Game</h1>
  <p>รีเฟรชหน้าเพื่อเริ่มเกม / เปิด Console (F12) เพื่อดูประวัติการทาย</p>

  <!-- วาง script ไว้ท้าย body เพื่อให้ HTML โหลดเสร็จก่อน -->
  <script defer src="./scripts.js"></script>
</body>
</html>
```

- ไฟล์: **scripts.js**

```javascript
// เลือกระดับความยาก -> return จำนวนครั้งที่ทายได้
function chooseMaxAttempts() {
  const level = prompt("เลือกระดับ: 1 = ง่าย (10 ครั้ง), 2 = ปกติ (7 ครั้ง), 3 = ยาก (5 ครั้ง)");

  // 3.2 switch ต้องมี break และ default
  switch (level) {
    case "1":
      return 10;
    case "2":
      return 7;
    case "3":
      return 5;
    default:
      return 7; // กรอกอย่างอื่น/กด Cancel ใช้ระดับปกติ
  }
}

function playGame() {
  const maxAttempts = chooseMaxAttempts();
  const secret = Math.floor(Math.random() * 100) + 1; // สุ่ม 1-100
  const guesses = [];       // เก็บประวัติการทาย
  let attempts = 0;
  let isCorrect = false;

  // 3.3 while + 3.1 logical operators (&& และ !)
  while (attempts < maxAttempts && !isCorrect) {
    const input = prompt(`ครั้งที่ ${attempts + 1}/${maxAttempts}: ทายเลข 1-100 (กด Cancel เพื่อยอมแพ้)`);

    // กด Cancel -> prompt คืนค่า null
    if (input === null) {
      alert("ยอมแพ้แล้วหรือ? เฉลยคือ " + secret);
      break; // ออกจาก while ทันที
    }

    const guess = Number(input);

    // 3.1 ตรวจ input ด้วย || (ผิดข้อใดข้อหนึ่งก็ถือว่าไม่ถูกต้อง)
    if (input.trim() === "" || isNaN(guess) || !Number.isInteger(guess) || guess < 1 || guess > 100) {
      alert("กรุณากรอกจำนวนเต็มระหว่าง 1 ถึง 100");
      continue; // ข้ามไปรอบถัดไป โดยไม่นับเป็นการทาย
    }

    attempts++;
    guesses.push(guess);

    // 3.2 if / else if / else
    if (guess === secret) {
      isCorrect = true;
    } else if (guess > secret) {
      alert(Math.abs(guess - secret) <= 5 ? "มากไปนิดเดียว ใกล้มากแล้ว!" : "มากไป!");
    } else {
      alert(Math.abs(guess - secret) <= 5 ? "น้อยไปนิดเดียว ใกล้มากแล้ว!" : "น้อยไป!");
    }
  }

  // 3.2 ternary operator
  const result = isCorrect ? "ชนะ" : "แพ้";

  alert(`ผล: ${result}\nเลขลับ: ${secret}\nทายทั้งหมด: ${attempts} ครั้ง`);

  // 3.3 for loop แสดงประวัติการทาย
  console.log("===== สรุปผลเกม =====");
  console.log(`ผล: ${result}`);
  console.log(`เลขลับ: ${secret}`);
  console.log(`ทายทั้งหมด: ${attempts} ครั้ง`);

  let history = "";
  for (let i = 0; i < guesses.length; i++) {
    history += `ครั้งที่ ${i + 1}: ${guesses[i]}`;
    if (i < guesses.length - 1) {
      history += " | ";
    }
  }
  console.log("ประวัติการทาย: " + history);
}

// 3.3 do...while: เล่นอย่างน้อย 1 รอบเสมอ แล้วค่อยถามว่าเล่นต่อไหม
do {
  playGame();
} while (confirm("เล่นอีกรอบหรือไม่?"));
```
## :flying_saucer: Domain 4: Document Object Model :comet:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: To-Do List แบบ Interactive (DOM Manipulation)
&nbsp;&nbsp;&nbsp;&nbsp;สร้างหน้าเว็บ To-Do List ที่ผู้ใช้พิมพ์งานแล้วกดปุ่มหรือกด Enter เพื่อเพิ่มงาน คลิกที่ชื่องานเพื่อทำเครื่องหมายว่าเสร็จแล้ว กดปุ่มลบเพื่อลบงาน และมีตัวนับจำนวนงานที่อัปเดตเอง โดยทั้งหมดต้องสร้างและแก้ไของค์ประกอบ HTML ผ่าน JavaScript

**เฉลย**
- ไฟล์: **index.html** (โครงหน้า + CSS + `document.write` ใน footer)

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Domain 4 - To-Do List</title>
  <style>
    body { font-family: sans-serif; max-width: 480px; margin: 40px auto; }
    li { padding: 6px; list-style: none; display: flex; justify-content: space-between; }
    li span { cursor: pointer; }
    .done { text-decoration: line-through; color: gray; }
    .highlight { background: #fff3b0; }
    .error { border: 2px solid red; }
  </style>
</head>
<body>
  <h1 id="title">รายการสิ่งที่ต้องทำ</h1>

  <div>
    <input type="text" id="taskInput" placeholder="พิมพ์งานที่ต้องทำ">
    <button id="addBtn">เพิ่ม</button>
  </div>

  <p id="counter"></p>
  <ul id="taskList"></ul>
  <button id="clearBtn">ล้างทั้งหมด</button>

  <footer>
    <!-- 4.3 document.write ต้องรันระหว่างโหลดหน้า (ห้ามเรียกหลังโหลดเสร็จ ไม่งั้นหน้าจะถูกลบ) -->
    <script>
      document.write("<small>© " + new Date().getFullYear() + " My To-Do App</small>");
    </script>
  </footer>

  <script defer src="./scripts.js"></script>
</body>
</html>
```

- ไฟล์: **scripts.js**

```javascript
// ===== 4.4 ค้นหา element =====
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.querySelector("#taskList");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clearBtn");

let taskCount = 0; // ใช้สร้าง data-id ไม่ซ้ำกัน

// ===== 4.1 แสดงโครงสร้าง DOM tree (เรียกซ้ำ) =====
function printDomTree(node, depth) {
  console.log("  ".repeat(depth) + node.tagName.toLowerCase() + (node.id ? "#" + node.id : ""));
  for (const child of node.children) {
    printDomTree(child, depth + 1);
  }
}

// ===== อัปเดตตัวนับ =====
function updateCounter() {
  const total = taskList.children.length;
  const done = document.querySelectorAll("#taskList li.done").length;
  counter.textContent = `ทั้งหมด ${total} | เสร็จแล้ว ${done}`; // 4.3 textContent
}

// ===== 4.4 สร้างและเพิ่ม element =====
function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.classList.add("error");
    taskInput.setAttribute("placeholder", "กรุณาพิมพ์ชื่องานก่อน!");
    return;
  }

  taskInput.classList.remove("error");
  taskInput.setAttribute("placeholder", "พิมพ์งานที่ต้องทำ");
  taskCount++;

  const li = document.createElement("li");
  li.setAttribute("data-id", taskCount);

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "ลบ";
  delBtn.classList.add("delete-btn");

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateCounter();
}

// ===== 4.2 + 4.5 Events =====

// 4.2 document event: รอให้ DOM โหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM tree ของ <ul>:");
  printDomTree(taskList, 0);
  console.log("parent ของ ul คือ:", taskList.parentNode.tagName); // BODY
  updateCounter();
});

// 4.5 addEventListener: mouse event
addBtn.addEventListener("click", addTask);

// 4.2 keyboard event: กด Enter ในช่อง input
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Event delegation: ผูก listener ที่ <ul> ตัวเดียว ครอบคลุม <li> ที่สร้างใหม่ทุกอัน
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentNode.remove(); // ลบ <li>
  } else if (event.target.tagName === "SPAN") {
    event.target.parentNode.classList.toggle("done");
  }
  updateCounter();
});

// mouseover/mouseout เกิดซ้ำตอนเมาส์เคลื่อนผ่านลูก จึงใช้ closest("li") หา <li> ที่ครอบอยู่
taskList.addEventListener("mouseover", function (event) {
  const li = event.target.closest("li");
  if (li) li.classList.add("highlight");
});

taskList.addEventListener("mouseout", function (event) {
  const li = event.target.closest("li");
  if (li) li.classList.remove("highlight");
});

// 4.5 event handler property (ผูกได้แค่ handler เดียวต่อ event)
clearBtn.onclick = function () {
  if (taskList.children.length === 0) return;
  if (confirm("ต้องการล้างงานทั้งหมดหรือไม่?")) {
    taskList.innerHTML = ""; // 4.3 innerHTML: ล้างลูกทั้งหมด
    updateCounter();
  }
};
```
## :sparkler: Domain 5: HTML Forms :blush:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ฟอร์มสมัครสมาชิกคอร์สเรียน (Registration Form)
&nbsp;&nbsp;&nbsp;&nbsp;สร้างฟอร์มสมัครเรียน JavaScript ที่ตรวจสอบข้อมูลทุกช่องก่อนส่ง ถ้าข้อมูลไม่ถูกต้องให้แสดงข้อความ error ใต้ช่องนั้นๆ และไม่ส่งฟอร์ม ถ้าถูกต้องทั้งหมดให้ส่งไปหน้า thankyou.html เพื่อแสดงข้อมูลที่กรอก

**เฉลย**
- ไฟล์: **index.html** (ฟอร์มและช่องแสดง Error)

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Domain 5 - Registration Form</title>
  <style>
    body { font-family: sans-serif; max-width: 420px; margin: 40px auto; }
    .field { margin-bottom: 12px; }
    label { display: block; font-weight: bold; }
    .error-msg { color: red; font-size: 0.85em; }
    input.invalid, select.invalid { border: 2px solid red; }
  </style>
</head>
<body>
  <h1>สมัครเรียน JavaScript</h1>

  <!-- 5.3 action = ปลายทาง, method = วิธีส่ง, name = ชื่อ key ที่จะถูกส่งไป -->
  <form id="regForm" action="thankyou.html" method="get" novalidate>

    <div class="field">
      <label for="fullname">ชื่อ-นามสกุล</label>
      <input type="text" id="fullname" name="fullname">
      <span class="error-msg" id="err-fullname"></span>
    </div>

    <div class="field">
      <label for="email">อีเมล</label>
      <input type="email" id="email" name="email">
      <span class="error-msg" id="err-email"></span>
    </div>

    <div class="field">
      <label for="age">อายุ</label>
      <input type="number" id="age" name="age">
      <span class="error-msg" id="err-age"></span>
    </div>

    <div class="field">
      <label for="password">รหัสผ่าน</label>
      <input type="password" id="password" name="password">
      <span class="error-msg" id="err-password"></span>
    </div>

    <div class="field">
      <label for="confirm">ยืนยันรหัสผ่าน</label>
      <input type="password" id="confirm" name="confirm">
      <span class="error-msg" id="err-confirm"></span>
    </div>

    <div class="field">
      <label>เพศ</label>
      <!-- radio ที่อยู่กลุ่มเดียวกันต้องใช้ name เดียวกัน -->
      <input type="radio" name="gender" value="ชาย" id="male"><label for="male" style="display:inline">ชาย</label>
      <input type="radio" name="gender" value="หญิง" id="female"><label for="female" style="display:inline">หญิง</label>
      <span class="error-msg" id="err-gender"></span>
    </div>

    <div class="field">
      <label for="course">คอร์ส</label>
      <select id="course" name="course">
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>

    <div class="field">
      <input type="checkbox" id="agree" name="agree" value="yes">
      <label for="agree" style="display:inline">ยอมรับเงื่อนไขการสมัคร</label>
      <br><span class="error-msg" id="err-agree"></span>
    </div>

    <button type="submit">สมัครเรียน</button>
    <button type="reset" id="resetBtn">ล้างข้อมูล</button>
    <button type="button" id="fillBtn">กรอกตัวอย่าง</button>
  </form>

  <script defer src="./scripts.js"></script>
</body>
</html>
```

- ไฟล์: **scripts.js** (Retrieve / Set ค่า, Validation และควบคุมการ Submit)

```javascript
const form = document.getElementById("regForm");

// ===== 5.1 กำหนดค่าให้ฟอร์ม =====
// ตั้งค่าเริ่มต้นเมื่อโหลดหน้า
form.elements["course"].value = "HTML";

// ปุ่มกรอกตัวอย่าง: set ค่าให้ทุกชนิดของช่อง
document.getElementById("fillBtn").addEventListener("click", function () {
  form.elements["fullname"].value = "สมชาย ใจดี";
  form.elements["email"].value = "somchai@email.com";
  form.elements["age"].value = 25;
  form.elements["password"].value = "Abcd1234";
  form.elements["confirm"].value = "Abcd1234";
  document.getElementById("male").checked = true;       // radio
  form.elements["course"].value = "JavaScript";         // select
  document.getElementById("agree").checked = true;      // checkbox
});

// ===== ฟังก์ชันช่วยจัดการข้อความ error =====
function showError(field, message) {
  document.getElementById("err-" + field).textContent = message;
  const input = document.getElementById(field);
  if (input) input.classList.add("invalid");
}

function clearErrors() {
  const messages = document.querySelectorAll(".error-msg");
  for (const m of messages) {
    m.textContent = "";
  }
  const inputs = document.querySelectorAll(".invalid");
  for (const i of inputs) {
    i.classList.remove("invalid");
  }
}

// ===== 5.2 Validation: return true ถ้าข้อมูลถูกต้องทั้งหมด =====
function validateForm() {
  clearErrors();
  let isValid = true;

  // 5.1 อ่านค่าจากช่อง
  const fullname = form.elements["fullname"].value.trim();
  const email = form.elements["email"].value.trim();
  const ageText = form.elements["age"].value;
  const password = form.elements["password"].value;
  const confirm = form.elements["confirm"].value;
  // radio: หาตัวที่ถูกเลือก (ถ้าไม่มีจะได้ null)
  const gender = document.querySelector('input[name="gender"]:checked');
  const agree = form.elements["agree"].checked;

  if (fullname === "") {
    showError("fullname", "กรุณากรอกชื่อ-นามสกุล");
    isValid = false;
  } else if (fullname.length < 3) {
    showError("fullname", "ชื่อต้องยาวอย่างน้อย 3 ตัวอักษร");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("email", "รูปแบบอีเมลไม่ถูกต้อง");
    isValid = false;
  }

  const age = Number(ageText);
  if (ageText === "" || isNaN(age) || age < 15 || age > 60) {
    showError("age", "อายุต้องเป็นตัวเลข 15-60");
    isValid = false;
  }

  if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    showError("password", "รหัสผ่านต้องมีอย่างน้อย 8 ตัว มีตัวพิมพ์ใหญ่และตัวเลข");
    isValid = false;
  }

  if (confirm !== password || confirm === "") {
    showError("confirm", "รหัสผ่านไม่ตรงกัน");
    isValid = false;
  }

  if (gender === null) {
    showError("gender", "กรุณาเลือกเพศ");
    isValid = false;
  }

  if (!agree) {
    showError("agree", "กรุณายอมรับเงื่อนไข");
    isValid = false;
  }

  return isValid;
}

// ===== 5.3 ควบคุมการ Submit =====
form.addEventListener("submit", function (event) {
  event.preventDefault(); // หยุดการส่งแบบอัตโนมัติไว้ก่อน

  if (validateForm()) {
    // form.submit() ไม่ trigger event "submit" ซ้ำ จึงไม่วนลูป
    // ผลคือ browser ไปที่ thankyou.html?fullname=...&email=...&...
    form.submit();
  }
});

// ปุ่ม Reset ล้างค่าในช่องอัตโนมัติอยู่แล้ว แต่ข้อความ error เราต้องล้างเอง
document.getElementById("resetBtn").addEventListener("click", clearErrors);
```

- ไฟล์: **thankyou.html** (หน้าปลายทาง อ่านข้อมูลจาก URL แล้วแสดงผล)

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>ขอบคุณที่สมัครเรียน</title>
</head>
<body>
  <h1>ขอบคุณที่สมัครเรียน!</h1>
  <p>ชื่อ: <span id="out-fullname"></span></p>
  <p>อีเมล: <span id="out-email"></span></p>
  <p>อายุ: <span id="out-age"></span></p>
  <p>เพศ: <span id="out-gender"></span></p>
  <p>คอร์ส: <span id="out-course"></span></p>
  <a href="index.html">กลับไปหน้าสมัคร</a>

  <script>
    // อ่านค่าจาก query string เช่น ?fullname=...&email=...
    const params = new URLSearchParams(window.location.search);

    // ไม่ดึง password มาแสดง
    const keys = ["fullname", "email", "age", "gender", "course"];
    for (const key of keys) {
      // ใช้ textContent (ไม่ใช่ innerHTML) กันโค้ดแปลกปลอมที่ผู้ใช้พิมพ์มา
      document.getElementById("out-" + key).textContent = params.get(key);
    }
  </script>
</body>
</html>
```