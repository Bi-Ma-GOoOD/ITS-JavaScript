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
    history += `\nครั้งที่ ${i + 1}: ${guesses[i]}`;
  }
  console.log("ประวัติการทาย: " + history);
}

// 3.3 do...while: เล่นอย่างน้อย 1 รอบเสมอ แล้วค่อยถามว่าเล่นต่อไหม
do {
  playGame();
} while (confirm("เล่นอีกรอบหรือไม่?"));