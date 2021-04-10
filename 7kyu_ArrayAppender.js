// 7kyu - Array Appender 

// Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

// For example:

// ['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
// [['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D']

function appendArrays (arr1, arr2) { return arr1.concat(arr2); }