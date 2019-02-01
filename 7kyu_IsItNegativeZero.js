// 7kyu - Is It Negative Zero (-0)

// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript/TypeScript, the input will be a number. In Python and Java, the input will be a float.


let isNegativeZero = n => Object.is(n, -0);