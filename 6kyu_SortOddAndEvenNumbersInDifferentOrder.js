// 6kyu - Sort odd and even Numbers in Different Order

// You have an array of numbers.

// Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]

function sortArray(array) {
    let even = array.filter(x => (x + 1) % 2).sort((a, b) => b - a), 
        odd = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2) ? odd.shift() : even.shift());
}