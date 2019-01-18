// 8kyu - Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

let sumMix = x => x.map(a => +a).reduce((a, b) => a + b);
