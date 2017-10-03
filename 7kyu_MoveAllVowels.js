// 7kyu - Move all vowels

// Given a string as input, move all of its vowel to the end of the string.

// Example input: day Example output: dya

// Example input: apple Example output: pplae

// Note: All input string are of small letters, and the order of the vowels at the 
// end should be the same as they were before.

function moveVowel(i) {
  return i.replace(/[aeiou]/gi, "") + i.replace(/[^aeiou]/gi, "");
}