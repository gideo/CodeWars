// 6kyu - Simple Fun #396: Find the Longest Substring Consisting of Unique Characters

// Task
// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

// Note
// 1 <= s.length <= 10^7

// 5 fixed testcases

// 100 random testcases, testing for correctness of solution

// 100 random testcases, testing for performance of code

// All inputs are valid.

// Pay attention to code performance.

// If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

// Example
// For s="baacab", the output should be 3.

// The non repeating substrings in s are:

// "b","c","a","ba","ac","ca","ab","cab"
// The longest one is "cab", its length is 3.

// For s="abcd", the output should be 4.

// The longest one is "abcd", its length is 4.

// For s="!@#$%^&^%$#@!", the output should be 7.

// The longest substring are "!@#$%^&" and "&^%$#@!", their length both are 7.

function longestSubstringOf(s){
  let max = 0, current = '';
  
  for(let i = 0, j = 0;  i < s.length; j = 0, i++) {
    while(j < current.length && current[j] !== s[i]) j++;
    current = (( j === current.length) ? current : current.slice(j+1)) + s[i];
    max = Math.max(max, current.length);
  }
  
  return max;
}