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