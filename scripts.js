// Exercise 5 — Searching + Mini Logic
function findSecondLargest(arr) {
    let first_largest = -Infinity;
    let second_largest = -Infinity;

    for (const x of arr){
        if (x > first_largest){
            second_largest = first_largest;
            first_largest = x;
        }else if (x < first_largest && x > second_largest){
            second_largest = x;
        }
    }

    return (second_largest === -Infinity) ? first_largest : second_largest;
}

const arr_test = [[1, 2, 3, 4], [3, 7, 2, 9, 4], [5, 5, 5], [18, 17, 19], [17, 16], [17, 18, 10, 7, 2026], [9, 8, 7], [-200, -99]];

let x = 0

while (x < arr_test.length) {
    console.log(findSecondLargest(arr_test[x])); // 3, 7, 5, 18, 16, 18, 8
    x++;
}