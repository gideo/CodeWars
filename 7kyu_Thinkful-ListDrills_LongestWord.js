// 7kyu - Thinkful - List Drills: Longest word

// Write a function longest() that takes one argument, a list of words, 
// and returns the length of the longest word in the list.

// For example:

// >>> words = ['simple', 'is', 'better', 'than', 'complex']
// >>> longest(words)
// 7
// Do not modify the input list.

let longest = words => Math.max(...words.map(a => a.length));