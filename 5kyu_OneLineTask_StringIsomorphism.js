// 5kyu - One Line Task - String Isomorphism

// This Kata is inspired by "Check if two words are isomorphic to each other" 

// by rasmus_ri.

// Task
// Two strings a and b are called isomorphic if there is a one-to-one mapping possible 
// for every character of a to every character of b and all occurrences of every 
// character in a map to same character in b.

// In this Kata, you will create a function that returns true if two given strings are 
// isomorphic to each other, and false otherwise. Remember that order is important.

// Your solution must be able to handle words with more than 100 characters.

// Example
// True examples:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// False examples:

// AB CC
// XXY XYY
// ABAB CD
// Code Limit
// Less than 70 chars.

// Advice
// If your code length is much longer than the limit, giving up is also a good choice :D

p=f=>[...f].map(a=>f.indexOf(a)).join(),isomorph=(a,b)=>p(a)==p(b);