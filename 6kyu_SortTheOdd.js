// 6 kyu - Sort the Odd

// Description:

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

let sortArray = function(arr) {
  let idx = arr.map((a, i) => a%2===1 ? i : '').filter(a => a !== '');
  let odds = arr.filter(a => a % 2 === 1).sort((a,b) => a - b);
  for(let i = 0; i < idx.length; i+=1) {
    arr[idx[i]] = odds[i];
  }
  return arr;
}