// 7kyu - Working With Arrays II

// In this kata the function returns an array like the one passed to it but 
// with its nth element removed (with 0 <= n <= array.length - 1). The 
// function is already written for you and the basic tests pass, but random 
// tests fail. Your task is to figure out why and fix it.

// Good luck!

// Some good reading: MDN Docs about arrays

function removeNthElement(arr, n) {
  var arrCopy = arr.slice();
  arrCopy.splice(n, 1);
  return arrCopy;
}