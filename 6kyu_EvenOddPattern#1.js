// 6kyu - Even Odd Pattern #1

// Write a function that takes an array/list of numbers and returns a number.

// See the examples and try to guess the pattern:

// EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
// EvenOdd([1,2,3]) => 5
// EvenOdd([0,2,3]) => 3
// EvenOdd([1,0,3]) => 3
// EvenOdd([3,2])   => 6

let EvenOdd = arr => arr.reduce(function(sum,now,index,arr){return (index%2!=1)?sum+now:sum*now},0);