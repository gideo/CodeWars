// 5kyu - Scramblies

// Write function scramble(str1,str2) that returns true if a portion of str1 
// characters can be rearranged to match str2, otherwise returns false.

// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
  let occ = str1.split("").reduce((arr, idx) => { arr[idx] ? arr[idx]++ : arr[idx] = 1; return arr; }, {});
  return str2.split("").every((a) => --occ[a] >= 0);
}