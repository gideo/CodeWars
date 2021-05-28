// 6kyu - Valid String

// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

// Task
// Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

// For example:

// dictionary: ["code", "wars"]

// s1:         "codewars" =>  true  -> match 'code', 'wars'
// s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
// One word from the dictionary can be used several times.

let validWord = function(dictionary, word) {
  let regex = new RegExp('^(' + dictionary.join('|') + ')+$');
  return regex.test(word);
};