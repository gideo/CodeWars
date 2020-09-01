// 6kyu - Simple Fun #135: Missing Alphabets 

// Task
// Given string s, which contains only letters from a to z in lowercase.

// A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

// 2 sets of alphabets mean 2 or more alphabets.

// Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

// If the string contains all of the letters in the alphabet, return an empty string ""

// Example
// For s='abcdefghijklmnopqrstuvwxy'

// The result should be 'z'

// For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'

// The result should be 'zz'

// For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'

// The result should be 'ayzz'

// For s='codewars'

// The result should be 'bfghijklmnpqtuvxyz'

// Input/Output
// [input] string s

// Given string(s) contains one or more set of alphabets in lowercase.

// [output] a string

// Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"

function missingAlphabets(s) {
  let arr = [...s].reduce((c, x) => (c[x] = (c[x] || 0) + 1, c), {}), max = Math.max(...Object.values(arr));
  return [..."abcdefghijklmnopqrstuvwxyz"].map(x => x.repeat(max - (arr[x] || 0))).join("");
}