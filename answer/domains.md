# :zap: แบบทดสอบท้าย Objective domain :rainbow:
:house: [กลับไปที่หน้าแรก](/README.md)<br><br>
&nbsp;&nbsp;&nbsp;&nbsp; ไฟล์นี้คือการรวบรวมเฉลยของโจทย์สำหรับการสร้างโปรแกรมขนาดเล็ก (Mini - Project) โดยวัตถุประสงค์ของการสร้างโปรแกรมขนาดเล็ก คือการทำให้ผู้เรียนได้มีความเข้าใจในความหมายโดยรวมของ Domain นั้นๆ ได้อย่างเข้าใจมากยิ่งขึ้น และสามารถนำความรู้ที่มีมาประยุกต์ใช้ในการสร้างโปรแกรมต่างๆ เพื่อช่วยแก้ไขปัญหาในโลกความจริง ด้วยความรู้ที่ได้รับมา
## :point_up: วิธีการอ่านเฉลย :thinking:
&nbsp;&nbsp;&nbsp;&nbsp;การอ่านเฉลยของแบบทดสอบท้าย Objective domain คือการอ่านโค้ดที่เขียนอยู่ ว่าโค้ดที่มีการเขียนนั้นส่วนไหนที่สื่อถึงข้อกำหนดที่ได้มีการระบุเอาไว้ นอกจากนี้การอ่านการตั้งชื่อตัวแปร การเลือกใช้ประเภทการประกาศข้อมูลของตัวแปรตัวนั้นๆ ก็จะสามารถทำให้เข้าใจได้ว่า เพราะเหตุใด ทำไมตัวแปรนี้ถึงใช้ const, let หรือแม้กระทั่งการตั้งชื่อตัวแปรที่สอดคล้องกับการทำงานของตัวแปรนั้นๆ<br>
&nbsp;&nbsp;&nbsp;&nbsp;นอกจากการอ่านโค้ดแล้ว การอ่านคอมเมนต์ก็จะช่วยให้ผู้อ่านสามารถเข้าใจกลไกการทำงานของโค้ดได้ดีมากยิ่งขึ้น ว่าโค้ดชุดที่ผู้อ่านกำลังอ่านอยู่นั้น มีวัตถุประสงค์การทำงานเป็นอย่างไร และให้ผลลัพธ์ออกมาเป็นอะไร
## :large_orange_diamond: สารบัญ :corn:
* :heavy_plus_sign: [Domain 1: JavaScript Operators, Methods, and Keywords](#heavy_plus_sign-domain-1-javascript-operators-methods-and-keywords-old_key)
* :floppy_disk: [Domain 2: Variables, Data Types, and Functions](#floppy_disk-domain-2-variables-data-types-and-functions-smiley)

## :heavy_plus_sign: Domain 1: JavaScript Operators, Methods, and Keywords :old_key:
:crystal_ball: [กลับไปที่สารบัญ](#large_orange_diamond-สารบัญ-corn)<br>

### Mini-Project: ระบบคำนวณใบเสร็จร้านกาแฟ (Coffee Shop Receipt System)

เขียนโปรแกรมที่ให้ผู้ใช้กรอกชื่อและจำนวนแก้วกาแฟที่จะสั่ง แล้วคำนวณราคาพร้อมส่วนลดและภาษี จากนั้นแสดงใบเสร็จ ถ้ากรอกข้อมูลผิด (เช่น ไม่ใช่ตัวเลข หรือค่าติดลบ) ให้แสดง error message ที่เหมาะสมแทนที่จะปล่อยให้โปรแกรม crash

**เฉลย**
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
ยังไม่มีครับ :sob::pray::wilted_flower: เนื่องจาก Domain ที่ 2 พึ่งเรียนจบหัวข้อย่อยที่ 2.3 - Complete and debug code that uses objects