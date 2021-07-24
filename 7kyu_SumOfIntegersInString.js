// 7kyu - Sum of Integers in String

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

let sumOfIntegersInString = s => (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0); 