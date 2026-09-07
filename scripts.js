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
        // แสดงข้อมูลในหน้า HTML
        document.getElementById("customer_name").innerHTML += `${customerName || "unknown"}`;
        document.getElementById("quantity").innerHTML += `${coffeeAmount || "unknown"}`;
        document.getElementById("total_cost").innerHTML += `${totalCost || "unknown"}`;
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