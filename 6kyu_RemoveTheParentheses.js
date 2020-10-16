// 6kyu - Remove the Parentheses

// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.

function removeParentheses(s){
  let res = "", ct = 0;
  for (let letter of s){
    if (letter == "(") ct++;
    if (ct == 0) res += letter;
    if (letter == ")") ct--;
  }
  return res;
}