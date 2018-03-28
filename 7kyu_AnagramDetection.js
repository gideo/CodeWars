// 7kyu - Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a 
// new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams 
// of theeach other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

let isAnagram = function(test, original) {
  let scramble = str => str.toLowerCase().split("").sort().join("");
  return scramble(test) === scramble(original);
};