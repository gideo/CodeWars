// 7kyu - Stanton measure
// The Stanton measure of an array is computed as follows. Count the number of 
// 1s in the array. Let this count be n. The Stanton measure is the number of times 
// that n appears in the array.

// eg:-

//  The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3 

//  because 1 occurs 2 times in the array and 2 occurs 3 times.
// Write a function stantonMeasure/StantonMeasure which takes an integer array and 
// returns its Stanton measure.

function stantonMeasure(arr) {
  let n = arr.filter(a => a === 1).length;
  return arr.filter(b => b === n).length;
}