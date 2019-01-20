// 7kyu - Simple remove duplicates

// In this Kata, you will remove the left-most duplicates from an int array and return the result.

// For example:
// solve([3,4,4,3,6,3]) = [4,6,3]

// -- remove the 3 in index 0 and index 3
// -- remove the 4 in index 1
// More examples in test cases.

// Good luck!

let solve = a => Array.from(new Set(a.reverse())).reverse();