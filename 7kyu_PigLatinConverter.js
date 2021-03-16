// 7kyu - Pig Latin Converter 

// Pig Latin Converter
// Write a function that takes in a string and convert that string to Pig Latin.

// Definition of Pig Latin for the purposes of this program:
// Take the first letter of each word and put it at the end
// Add 'ay' at the end of each word
// Example
// The cat ran away with the spoon

// would evaluate to

// hetay atcay anray wayaay ithway hetay poonsay

// Misc Info
// The returned value should be in all lowercase.

let pigLatin = s => s.toLowerCase().replace(/\w+/g,m=>m.slice(1)+m[0]+'ay');