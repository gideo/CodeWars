// 6 kyu - Reverse every other word in the string

// Reverse every other word in a given string, then return it. Don't forget to include the spaces!

let reverse = str => str.split(' ').map((a, i) => (i % 2 != 0) ? a.split('').reverse().join('') : a).join(' ');
