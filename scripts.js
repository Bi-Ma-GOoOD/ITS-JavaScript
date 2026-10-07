// Exercise 1 — Multi-dimensional Array & Access
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