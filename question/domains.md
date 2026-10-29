# :construction: แบบทดสอบท้าย Objective domain :ferris_wheel:
:house: [กลับไปที่หน้าแรก](/README.md)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp; ไฟล์นี้คือการรวบรวมโจทย์สำหรับการสร้างโปรแกรมขนาดเล็ก (Mini - Project) โดยวัตถุประสงค์ของการสร้างโปรแกรมขนาดเล็ก คือการทำให้ผู้เรียนได้มีความเข้าใจในความหมายโดยรวมของ Domain นั้นๆ ได้อย่างเข้าใจมากยิ่งขึ้น และสามารถนำความรู้ที่มีมาประยุกต์ใช้ในการสร้างโปรแกรมต่างๆ เพื่อช่วยแก้ไขปัญหาในโลกความจริง ด้วยความรู้ที่ได้รับมา
## :point_up: วิธีทำโจทย์ :thinking:
&nbsp;&nbsp;&nbsp;&nbsp;เขียนโปรแกรมให้ถูกต้องและเป็นไปตามข้อกำหนด (Requirements) ที่ได้รับมาให้ครบ หรือ ตามศักยภาพของตนเองที่จะสามารถทำได้ จากนั้นให้ทำการรันโค้ดจริง เพื่อทดลองการทำงานของโปรแกรมว่ามีการทำงานที่ถูกต้องตามข้อกำหนดที่ระบุเอาไว้หรือไม่ ถ้ามีจุดใดที่ไม่ถูกต้องหรือผิด ก็ให้ทำการแก้ไขจนกว่าจะครบหรือคิดว่าถูกต้อง<br>
&nbsp;&nbsp;&nbsp;&nbsp;โดยวิธีการตรวจสอบว่าโปรแกรมที่ตนเองเขียนนั้นถูกต้องหรือไม่ คือการสังเกตข้อกำหนดที่ตนเองได้รับมาว่าตนเองเขียนตามข้อกำหนดครบทุกข้อแล้วหรือยัง จากนั้นให้นำโค้ดโปรแกรม พร้อมกับข้อกำหนดต่างๆ ไปตรวจสอบด้วย AI chatbot อย่างเช่น Claude, GPT, etc. เพื่อให้ได้รับการแนะนำเพิ่มเติม ที่จะสามารถนำไปปรับใช้ในอนาคตได้
## :large_orange_diamond: สารบัญ :corn:
* :heavy_plus_sign: [Domain 1: JavaScript Operators, Methods, and Keywords](#heavy_plus_sign-domain-1-javascript-operators-methods-and-keywords-old_key)
* :floppy_disk: [Domain 2: Variables, Data Types, and Functions](#floppy_disk-domain-2-variables-data-types-and-functions-smiley)
* :sloth: [Domain 3: Decisions and Loops](#sloth-domain-3-decisions-and-loops-christmas_tree)
* :flying_saucer: [Domain 4: Document Object Model](#flying_saucer-domain-4-document-object-model-comet)
* :sparkler: [Domain 5: HTML Forms](#sparkler-domain-5-html-forms-blush)

## :heavy_plus_sign: Domain 1: JavaScript Operators, Methods, and Keywords :old_key:
:chicken: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ระบบคำนวณใบเสร็จร้านกาแฟ (Coffee Shop Receipt System)

&nbsp;&nbsp;&nbsp;&nbsp;เขียนโปรแกรมที่ให้ผู้ใช้กรอกชื่อและจำนวนแก้วกาแฟที่จะสั่ง แล้วคำนวณราคาพร้อมส่วนลดและภาษี จากนั้นแสดงใบเสร็จ ถ้ากรอกข้อมูลผิด (เช่น ไม่ใช่ตัวเลข หรือค่าติดลบ) ให้แสดง error message ที่เหมาะสมแทนที่จะปล่อยให้โปรแกรม crash

**Checklist ที่ต้องครอบคลุม**

- 1.1 Operators: ใช้ `*`, `-`, `+`, `%` หรือ compound assignment ในการคำนวณราคา ส่วนลด และภาษี
- 1.2 Best Practices: ใช้ `const` เป็นค่าเริ่มต้น ตั้งชื่อตัวแปรสื่อความหมาย มี comment อธิบาย และหลีกเลี่ยง `var`
- 1.3 Script Placement: เลือกได้ว่าจะวาง `<script>` ตรงไหนของ HTML และทำไม (ใส่ comment กำกับเหตุผลไว้ในโค้ดสุดท้าย)
- 1.4 Exception Handling: ใช้ `try/catch` ดักจับ input ผิดพลาด และใช้ `throw` สร้าง custom error เมื่อ input ไม่ถูกต้อง (เช่น จำนวนแก้วติดลบ)
- 1.5 BOM: ใช้ `prompt()` รับชื่อและจำนวนแก้ว ใช้ `confirm()` ถามยืนยันก่อนสั่งซื้อ และใช้ `alert()` แสดงใบเสร็จหรือ error

**Requirements**

1. ใช้ `prompt()` ถามชื่อลูกค้าและจำนวนแก้วกาแฟที่ต้องการสั่ง (ราคาแก้วละ 45 บาท คงที่)
2. ตรวจสอบจำนวนแก้วที่กรอก: ถ้าไม่ใช่ตัวเลข (เช่น พิมพ์ตัวอักษร หรือกด Cancel) ให้ `throw` custom error พร้อมข้อความที่เหมาะสม ถ้าเป็นเลขติดลบหรือ 0 ให้ `throw` custom error อีกแบบ (แยกประเภท error ให้ชัดเจนด้วย custom Error class ถ้าอยากลองของยาก)
3. ใช้ `try/catch` ครอบส่วนคำนวณทั้งหมด ถ้าเกิด error ให้ `alert()` แสดงข้อความ error แล้วจบโปรแกรม ใช้ `finally` แสดงข้อความ "ขอบคุณที่ใช้บริการ" เสมอไม่ว่าจะสำเร็จหรือไม่
4. ถ้าสั่งตั้งแต่ 3 แก้วขึ้นไป ให้ได้ส่วนลด 10% ของยอดรวม (ใช้ compound assignment)
5. คำนวณภาษี 7% หลังหักส่วนลด
6. ก่อนแสดงใบเสร็จ ใช้ `confirm()` ถามว่า "ยืนยันการสั่งซื้อหรือไม่?" ถ้ากด Cancel ให้ `alert("ยกเลิกการสั่งซื้อ")` แล้วจบโปรแกรมโดยไม่คำนวณต่อ
7. ถ้ายืนยัน ให้แสดงใบเสร็จผ่าน `alert()` ในรูปแบบด้านล่าง

**Output**
```
ลูกค้า: [ชื่อ]
จำนวน: [x] แก้ว
ราคารวม: [ราคาหลังหักส่วนลดและภาษี] บาท
```
## :floppy_disk: Domain 2: Variables, Data Types, and Functions :smiley:
:chicken: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ระบบสรุปผลการเรียนนักเรียน (Student Grade Report)
&nbsp;&nbsp;&nbsp;&nbsp;เขียนโปรแกรมที่เก็บข้อมูลนักเรียนหลายคน (ชื่อและคะแนนสอบหลายวิชา) แล้วคำนวณคะแนนเฉลี่ย คะแนนสูงสุด/ต่ำสุด และตัดเกรดของนักเรียนแต่ละคน จากนั้นสรุปว่าใครได้คะแนนเฉลี่ยสูงสุดและมีใครสอบไม่ผ่านบ้าง โดยแสดงผลที่ Console

**Checklist ที่ต้องครอบคลุม**

- 2.1 Primitives Types: ประกาศตัวแปรชนิด  `string`, `number`, `boolean`, `null`, `undefined` และใช้ `typeof` ตรวจสอบชนิดข้อมูล
- 2.2 Arrays: ใช้ array เก็บรายชื่อนักเรียนและคะแนน ใช้ `push()`, `length`, การอ้างอิงด้วย index และการวนอ่านข้อมูล
- 2.3 Objects: ใช้ object เก็บข้อมูลนักเรียนแต่ละคน (property `name`, `scores`) และอ่าน/เพิ่มค่า property ได้
- 2.4 Math: ใช้ `Math.round()`, `Math.max()`, `Math.min()`, `Math.ceil()`
- 2.5 Functions: สร้าง function ที่รับ parameter และ `return` ค่ากลับมา

**Requirements**

1. ประกาศค่าคงที่ `SCHOOL_NAME` (string) และ `PASS_SCORE = 50` (number) และตัวแปร `totalStudents`, `hasFailedStudent` (boolean), `topStudent` (เริ่มเป็น `null`)
2. สร้าง array `students` ที่เก็บ object อย่างน้อย 3 คน โดยแต่ละคนมี `name` (string) และ `scores` (array ของตัวเลข 3 วิชา)
3. สร้าง `calculateAverage(scores)` ที่รับ array คะแนน แล้ว return ค่าเฉลี่ยปัดทศนิยม 2 ตำแหน่ง (ใช้ `Math.round`)
4. สร้าง `getGrade(avg)` ที่ return เกรด A (≥80), B (≥70), C (≥60), D (≥50), F (ต่ำกว่า 50)
5. สร้าง `buildReport(student)` ที่ return object สรุปผล (`name`, `average`, `highest`, `lowest`, `grade`, `passed`)
6. ใช้ `push()` เพิ่มนักเรียนที่สอบตกอีก 1 คน แล้วอัปเดต `totalStudents` จาก `length`
7. วนลูปแสดงรายงานของนักเรียนทุกคน ถ้าใครสอบตก ให้แสดงว่า "ต้องเพิ่มอีกกี่คะแนนถึงจะผ่าน" (ใช้ `Math.ceil`)
8. แสดงสรุปท้ายรายงานในรูปแบบด้านล่าง

**Output**

```
===== Code Academy: รายงานผลการเรียน =====
สมชาย | เฉลี่ย: 81.83 | สูงสุด: 90 | ต่ำสุด: 75.5 | เกรด: A | ผ่าน
...
มานี | เฉลี่ย: 44.33 | สูงสุด: 50 | ต่ำสุด: 38 | เกรด: F | ไม่ผ่าน (ต้องเพิ่มอีก 6 คะแนน)
-----------------------------------------
นักเรียนทั้งหมด: 4 คน
เฉลี่ยสูงสุด: สมชาย (81.83)
มีนักเรียนสอบตก: true
```
## :sloth: Domain 3: Decisions and Loops :christmas_tree:
:chicken: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: เกมทายตัวเลข (Number Guessing Game)
&nbsp;&nbsp;&nbsp;&nbsp;เขียนเกมที่คอมพิวเตอร์สุ่มเลข 1-100 แล้วให้ผู้เล่นทาย โดยโปรแกรมจะบอกใบ้ว่า "มากไป/น้อยไป/ใกล้มากแล้ว" และจำกัดจำนวนครั้งตามระดับความยาก เมื่อจบเกมให้สรุปผลและถามว่าจะเล่นอีกรอบหรือไม่

**Checklist ที่ต้องครอบคลุม**

- 3.1 Logical & Comparison: ใช้ `&&`, `||`, `!`, `===`, `!==`, `>=`, `<=` ในการตรวจเงื่อนไข
- 3.2 Decisions: ใช้ `if / else if / else`, `switch` และ ternary operator (`? :`)
- 3.3 Loops: ใช้ `while`, `do...while`, `for` รวมถึง `break` และ `continue`

**Requirements**

1. ใช้ `prompt()` ให้ผู้เล่นเลือกระดับความยาก (1 = ง่าย 10 ครั้ง, 2 = ปกติ 7 ครั้ง, 3 = ยาก 5 ครั้ง) ใช้ `switch` กำหนดจำนวนครั้ง ถ้ากรอกอย่างอื่นให้ใช้ `default` เป็นระดับปกติ
2. สุ่มเลข 1-100 ด้วย `Math.random()` และ `Math.floor()`
3. ใช้ `while` วนรับการทาย ต่อเมื่อ "ยังทายไม่ครบจำนวนครั้ง และ ยังทายไม่ถูก" (ใช้ `&&` กับ `!`)
4. ถ้าผู้เล่นกด Cancel ให้ใช้ `break` ออกจากเกม
5. ถ้าค่าที่กรอกไม่ใช่จำนวนเต็ม 1-100 (ว่าง, ไม่ใช่ตัวเลข, นอกช่วง) ให้ `alert` เตือนแล้วใช้ `continue` โดยไม่นับเป็นการทาย
6. ถ้าทายผิด ให้ใช้ `if/else if` บอกว่ามากไปหรือน้อยไป ถ้าห่างจากคำตอบไม่เกิน 5 ให้เพิ่มคำใบ้ "ใกล้มากแล้ว!"
7. เมื่อจบเกม ใช้ ternary สร้างข้อความ "ชนะ"/”แพ้" แล้วใช้ `alert` แสดงสรุป
8. ใช้ `for` วนแสดงประวัติการทายทั้งหมดที่ Console
9. ใช้ `do...while` ครอบทั้งเกม โดยใช้ `confirm()` ถามว่าจะเล่นอีกรอบหรือไม่

**Output**

```
===== สรุปผลเกม =====
ผล: ชนะ
เลขลับ: 42
ทายทั้งหมด: 4 ครั้ง
ประวัติการทาย: ครั้งที่ 1: 50 | ครั้งที่ 2: 30 | ครั้งที่ 3: 45 | ครั้งที่ 4: 42
```
## :flying_saucer: Domain 4: Document Object Model :comet:
:chicken: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: To-Do List แบบ Interactive (DOM Manipulation)
&nbsp;&nbsp;&nbsp;&nbsp;สร้างหน้าเว็บ To-Do List ที่ผู้ใช้พิมพ์งานแล้วกดปุ่มหรือกด Enter เพื่อเพิ่มงาน คลิกที่ชื่องานเพื่อทำเครื่องหมายว่าเสร็จแล้ว กดปุ่มลบเพื่อลบงาน และมีตัวนับจำนวนงานที่อัปเดตเอง โดยทั้งหมดต้องสร้างและแก้ไของค์ประกอบ HTML ผ่าน JavaScript

**Checklist ที่ต้องครอบคลุม**

- 4.1 DOM Tree: เข้าใจโครงสร้าง node และใช้ `parentNode`, `children`, `firstElementChild` เดินในต้นไม้ DOM
- 4.2 Events: จัดการ event ประเภท document (`DOMContentLoaded`), keyboard (`keydown`), mouse (`click`, `mouseover`, `mouseout`)
- 4.3 Output: ใช้ `textContent`, `innerHTML` และ `document.write()` แสดงผลใน HTML
- 4.4 Locate/Modify/Add: ใช้ `getElementById`, `querySelector`, `querySelectorAll`, `createElement`, `appendChild`, `setAttribute`, `classList`, `remove()`
- 4.5 Event Handlers & Listeners: ใช้ทั้ง `addEventListener` และ event handler property (`onclick`)

**Requirements**

1. สร้างโครง HTML ประกอบด้วย `<input>`, ปุ่ม "เพิ่ม", `<ul>` สำหรับรายการ, `<p>` สำหรับตัวนับ และปุ่ม "ล้างทั้งหมด"
2. ใช้ `document.write()` ใน `<footer>` แสดงข้อความ © พร้อมปีปัจจุบัน
3. รอให้ DOM โหลดเสร็จด้วย `DOMContentLoaded` ก่อนเริ่มทำงาน และพิมพ์โครงสร้าง DOM tree ของ `<ul>` ลง Console (ใช้ `parentNode`, `children`)
4. เมื่อกดปุ่ม "เพิ่ม" หรือกด Enter ในช่อง input ให้สร้าง `<li>` ที่มี `<span>` (ชื่องาน) และปุ่ม "ลบ" แล้วต่อเข้า `<ul>` พร้อมตั้ง attribute `data-id` ให้แต่ละงาน
5. ถ้าช่อง input ว่าง ให้เพิ่ม class `error` ให้ input และเปลี่ยน `placeholder` ด้วย `setAttribute`
6. คลิกที่ชื่องานให้สลับ class `done` (ขีดฆ่า) คลิกปุ่ม "ลบ" ให้ลบ `<li>` ออก (ใช้ event delegation ที่ `<ul>`)
7. เมื่อเอาเมาส์ชี้ที่งาน (`mouseover`) ให้ไฮไลต์ และเมื่อเอาเมาส์ออก (`mouseout`) ให้เอาไฮไลต์ออก
8. อัปเดตตัวนับ "ทั้งหมด X | เสร็จแล้ว Y" ทุกครั้งที่มีการเปลี่ยนแปลง
9. ปุ่ม "ล้างทั้งหมด" ให้ใช้ event handler property `onclick` พร้อม `confirm()` ก่อนล้าง
## :sparkler: Domain 5: HTML Forms :blush:
:chicken: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ฟอร์มสมัครสมาชิกคอร์สเรียน (Registration Form)
&nbsp;&nbsp;&nbsp;&nbsp;สร้างฟอร์มสมัครเรียน JavaScript ที่ตรวจสอบข้อมูลทุกช่องก่อนส่ง ถ้าข้อมูลไม่ถูกต้องให้แสดงข้อความ error ใต้ช่องนั้นๆ และไม่ส่งฟอร์ม ถ้าถูกต้องทั้งหมดให้ส่งไปหน้า thankyou.html เพื่อแสดงข้อมูลที่กรอก

**Checklist ที่ต้องครอบคลุม**

- 5.1 Retrieve/Set: อ่านค่าจาก text, number, radio, checkbox, select และกำหนดค่าให้ช่องต่างๆ ด้วย JavaScript
- 5.2 Validation: ตรวจ required, ความยาว, รูปแบบ (regex), ช่วงตัวเลข และความตรงกันของรหัสผ่าน
- 5.3 Submission Process: เข้าใจ `action`, `method`, attribute `name`, event `submit` และการส่งข้อมูลผ่าน query string

**Requirements**

1. สร้างฟอร์มที่มี `action="thankyou.html"` และ `method="get"` มีช่อง ชื่อ-นามสกุล, อีเมล, อายุ, รหัสผ่าน, ยืนยันรหัสผ่าน, เพศ (radio), คอร์ส (select) และช่องยอมรับเงื่อนไข (checkbox) ทุกช่องต้องมี `name` ใส่ `novalidate` เพื่อให้ JavaScript ตรวจเอง
2. เมื่อโหลดหน้า ให้ใช้ JavaScript ตั้งค่าเริ่มต้นของ select เป็นคอร์สแรก และมีปุ่ม "กรอกตัวอย่าง" ที่ใส่ข้อมูลตัวอย่างลงทุกช่อง
3. ผูก event `submit` ของฟอร์ม แล้วใช้ `event.preventDefault()` เพื่อหยุดการส่งไว้ก่อน
4. เขียน `validateForm()` ที่ตรวจสอบ
    - ชื่อ: ห้ามว่าง และยาวอย่างน้อย 3 ตัวอักษร
    - อีเมล: ตรงตามรูปแบบอีเมล (regex)
    - อายุ: ต้องเป็นตัวเลข 15-60
    - รหัสผ่าน: อย่างน้อย 8 ตัว มีตัวพิมพ์ใหญ่และตัวเลข
    - ยืนยันรหัสผ่าน: ต้องตรงกับรหัสผ่าน
    - เพศ: ต้องเลือก 1 ตัวเลือก
    - ยอมรับเงื่อนไข: ต้องติ๊ก
5. แสดงข้อความ error ใต้ช่องที่ผิด และล้าง error เดิมก่อนตรวจทุกครั้ง
6. ถ้าผ่านทุกข้อ ให้ส่งฟอร์มด้วย `form.submit()` ไปที่ `thankyou.html`
7. ใน `thankyou.html` ให้อ่านข้อมูลจาก query string แล้วแสดงผล (ห้ามแสดงรหัสผ่าน)
8. ปุ่ม Reset ต้องล้างข้อความ error ด้วย

**Output**

```
ขอบคุณที่สมัครเรียน!
ชื่อ: สมชาย ใจดี
อีเมล: somchai@email.com
อายุ: 25
เพศ: ชาย
คอร์ส: JavaScript
```