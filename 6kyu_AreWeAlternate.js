// 6kyu - Are we alternate?

// Create a function isAlt() that accepts a string as an argument and validates 
// whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

let isAlt = str => !(/[^aeiou]{2,}|[aeiou]{2,}/i.test(str));