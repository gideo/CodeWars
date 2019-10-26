// 6kyu - Numericals of a String

// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?

// Examples:
// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// There might be some non-ascii characters in the string.

function numericals(s){
  let obj = {};
  return s.split('').map(char => obj[char] = ++obj[char] || 1).join('');
}