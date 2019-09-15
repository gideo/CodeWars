// 7kyu - Longest Vowel Chain

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

let solve = s => Math.max(...s.match(/[aeiou]+/g).map(x => x.length));