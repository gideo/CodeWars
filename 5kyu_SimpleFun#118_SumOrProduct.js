// 5kyu - Simple Fun #118: Sum or Product 

// Task
// You are given an array of positive integers. While the array has more than one element you can choose two elements and replace them with their sum or product.

// Your task is to find the maximum possible number that can remain in the array after multiple such operations.

// Example
// For arr = [1, 3, 2], the result should be 9.

// in order to maximize the answer the first operation will be 1 + 2 (the array changes into [3, 3]) and the next 3 * 3 (the array changes into [9]), so the final result is 9.

// Input/Output
// [input] integer array arr

// array of positive integers

// [output] an integer

// maximum possible leftover

function sumOrProduct(arr) {
  if (arr.length === 1)
    return arr[0];
  arr = arr.sort();
  if(arr[0] === 1 && arr.indexOf(2)!== -1){
    arr.push(arr.shift() + arr.splice(arr.indexOf(2),1)[0]);
  }else if (arr[0] + arr[1] > arr[0] * arr[1]) {
     arr.push(arr.shift() +arr.shift());
  } else
    arr.push(arr.shift() *arr.shift());
  return sumOrProduct(arr);
}