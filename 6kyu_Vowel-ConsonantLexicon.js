// 6kyu - Vowel-Consonant Lexicon

// If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

// Given a string:

// alternate the vowels and consonants and return the lexicographically lowest element in the list
// If any two or more vowels or consonants must follow each other, return "failed"
// if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
// Examples:

// solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
// solve("oruder") = "edorur"
// solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
// In C, return an allocated string even if the response is "failed".
// Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Consonant value

// Alternate capitalization

function solve(s) {
  let f = s.match(/[aeiou]/g).sort(), n = s.match(/[^aeiou]/g).sort();
  if (n.length > f.length) [f, n] = [n, f];
  if (f.length - n.length > 1) return "failed";
  return f.map((c, idx) => c + (n[idx] || "")).join("");
}