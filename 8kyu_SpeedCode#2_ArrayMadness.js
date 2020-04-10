// 8kyu - Speed Code #2 - Array Madness 

// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;
// // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

let arrayMadness = (a, b) => a.reduce((acc, x) => acc + Math.pow(x, 2), 0) > b.reduce((acc, x) => acc + Math.pow(x, 3), 0);