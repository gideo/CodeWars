// 7kyu - Smallest Product
// Given an array of arrays, multiply the contents of each nested array 
// and return the smallest total.

// Note: all inputs will be positive integers.

// Example: input [[1,5],[2]] output: 2

let smallestProduct = arr => arr.map(s => s.reduce((a,b)=>a*b,1)).sort((a,b)=> a>b ? 1:-1)[0];