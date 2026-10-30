const form = document.getElementById("regForm");

// ===== 5.1 กำหนดค่าให้ฟอร์ม =====
// ตั้งค่าเริ่มต้นเมื่อโหลดหน้า
form.elements["course"].value = "HTML";

// ปุ่มกรอกตัวอย่าง: set ค่าให้ทุกชนิดของช่อง
document.getElementById("fillBtn").addEventListener("click", function () {
    clearErrors();
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