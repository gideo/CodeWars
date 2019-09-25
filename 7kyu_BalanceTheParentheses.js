// 7kyu - Balance the Parentheses

// Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

// The input will be a string of varying length, only containing '(' and/or ')'.

// For example:

// Input: ")("
// Output: "()()"

// Input: "))))(()("
// Output: "(((())))(()())"
// Enjoy!

const fixParentheses = (str) => {
  let [prefix,suffix] = [0,0];
  [...str].forEach(e => {
    if (e === ')'){suffix < 1 ? prefix++ : suffix--} 
      else {suffix++}});
  return '('.repeat(prefix) + str + ')'.repeat(suffix);
};