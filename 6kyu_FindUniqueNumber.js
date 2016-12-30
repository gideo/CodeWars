// 6 kyu - Find the unique number

// Description:

// There is an array with some numbers. All numbers are equal 
// except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains 3 or more numbers.

function findUniq(arr) {
  arr = arr.sort((a,b) => a - b);
  return (arr.lastIndexOf(arr[0]) === arr.indexOf(arr[0])) ? arr[0] : arr[arr.length-1];
}