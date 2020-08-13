// 7kyu - Alternate Case 

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

let alternateCase = s => s.split('').map(function(el) {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
}).join('');