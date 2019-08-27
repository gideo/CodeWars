// 7kyu - Numbers in Strings

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// Please also try Simple remove duplicates

let solve = s => Math.max(...s.match(/\d+/g));