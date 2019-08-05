// 7kyu - Array Comparator

// You have two arrays in this kata, every array contain only unique elements. Your task is to calcualate number of elements in first array which also are in second array.

let matchArrays = (v, r) => v.filter(e => r.indexOf(e) != -1).length;