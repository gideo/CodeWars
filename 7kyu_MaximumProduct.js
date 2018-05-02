// 7kyu - Maximum Product
// Given an array of integers, Find maximum product obtained from multiplying 2 
// adjacent numbers .

// Notes
// Array will contain at least 2 elements.

// Aarray may contain positive/negative numbers and zeroes.

// Input >> Output Examples
// adjacentElementsProduct([1,2,3])  ==>  return 6
// Explanation:
// Max product obtained from multiplying 3 * 2 = 6 .

// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])  ==>  return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// Max product obtained from multiplying -2 * 7 = -14 .

function adjacentElementsProduct(array) {
  let arr = [];
  for (let i = 0; i < array.length-1; i++)
    arr.push(array[i]*array[i+1]);
  return Math.max(...arr); 
}