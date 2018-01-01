// 7kyu - Homogenous Arrays
// Given a two-dimensional array, return a new array which carries over only those 
// arrays from the original, which were not empty and whose items are all of the same 
// type (i.e. homogenous). For simplicity, the arrays inside the array will only 
// contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return 
// [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty 
// arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should 
// not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered 
// illegal and should be filtered out.

let filterHomogenous = arr => arr.filter( a => a.length && a.every(t => typeof t === typeof a[0]));