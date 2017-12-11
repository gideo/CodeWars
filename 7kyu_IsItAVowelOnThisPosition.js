// 7 kyu - Is it a vowel on this position?

// Check if it is a vowel(a, e, i, o, u,) on the n position (the second argument, 

// only positive integer) in a string (the first argument). Don't forget about 

// uppercase. A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }

function checkVowel(string, pos) {
  return (pos > string.length || pos < 0) ? false : /[aeiou]/i.test(string[pos]);
};