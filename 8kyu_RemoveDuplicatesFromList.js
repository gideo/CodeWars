// 8kyu - Remove duplicates from List

// Complete the functionthat removes duplicates from a list of numbers.

// The order of the sequence needs to stay the same.

let distinct = a => [...a.filter((b,i) => a.lastIndexOf(b) === i)];