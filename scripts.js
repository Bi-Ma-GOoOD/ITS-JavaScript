// เก็บ URL ปัจจุบันไว้ในตัวแปร currentUrl
let currentUrl = location.href;
console.log(currentUrl);

// ถามชื่อผู้ใช้ ถ้าไม่กรอกอะไรเลย (null หรือ string ว่าง) ให้แสดง alert เตือน
let userName = prompt("กรุณากรอกชื่อของคุณ:");

if (userName === null || userName === "") {
    alert("คุณยังไม่ได้กรอกชื่อ!");
} else {
    console.log(`Input: ${userName}`);
}

// หน่วงเวลา 3 วินาที แล้วค่อยแสดงข้อความ "หมดเวลา!"
setTimeout(() => {
    console.log("หมดเวลา!");
}, 3000);