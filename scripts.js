// Exercise 5 — Searching + Mini Logic
function findFirstLargest(arr){
    let first_largest = -99;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first_largest) {
            first_largest = arr[i];
        }
    }

    return first_largest;
}

function findSecondLargest(arr) {
    const first_largest = findFirstLargest(arr);
    let largest_value = false;
    let second_largest = -99;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] != first_largest){
            if (arr[i] > second_largest){
                second_largest = arr[i];
            }
        }
    }

    return (second_largest == -99) ? first_largest : second_largest;
}

const arr_test = [[1, 2, 3, 4], [3, 7, 2, 9, 4], [5, 5, 5], [18, 17, 19], [17, 16], [17, 18, 10, 7, 2026], [9, 8, 7]];

let x = 0

while (x < arr_test.length) {
    console.log(findSecondLargest(arr_test[x])); // 3, 7, 5, 18, 16, 18, 8
    x++;
}