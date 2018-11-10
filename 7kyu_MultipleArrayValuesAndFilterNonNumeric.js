// 7kyu - Multiply array values and filter non-numeric

// Your task is to write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.

let multiplyAndFilter = (a, m) => a.filter(e => /\d/.test(e)).map(b => b * m);