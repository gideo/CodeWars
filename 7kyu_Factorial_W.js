// 7kyu - Factorial

// Your task is to write function factorial

// https://en.wikipedia.org/wiki/Factorial

let factorial = n => n?n * factorial(n-1):1;