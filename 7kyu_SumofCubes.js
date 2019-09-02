// 7kyu - Sum of Cubes

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:

// sumCubes(2) // 9
// // sum of the cubes of 1 and 2 is 1 + 8

let sumCubes = n => (n * (n + 1) / 2) ** 2;