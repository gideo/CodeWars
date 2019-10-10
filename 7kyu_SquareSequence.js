// 7kyu - Square Sequence

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(x);
    x*= x;
  }
  return arr;
}