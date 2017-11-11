// 7kyu - Dominant Array Elements

// An element in an array is dominant if it is greater than all 
// elements to its right.

// For example, in the array [1,21,4,7,5], we see that 21,7,5 
// are dominant. Therefore, solve([1,21,4,7,5]) = [21,7,5], which 
// is the order in which they appear.

// More examples in the test cases.

// Good luck!

function solve(arr){
  return arr.filter((a, i) => arr.slice(i+1).every(b => b < a));
}
