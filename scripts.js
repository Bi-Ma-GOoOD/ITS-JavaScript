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