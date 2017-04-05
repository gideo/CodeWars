// 5 kyu - Valid Parentheses

// Description:

// Write a function called validParentheses that takes a string of parentheses, and 
// determines if the order of the parentheses is valid. validParentheses should return 
// true if the string is valid, and false if it's invalid.

// Examples: 
// validParentheses( "()" ) => returns true 
// validParentheses( ")(()))" ) => returns false 
// validParentheses( "(" ) => returns false 
// validParentheses( "(())((()())())" ) => returns true 

// All input strings will be nonempty, and will only consist of open parentheses 
// '(' and/or closed parentheses ')'


var validParentheses = function(str) {
  let arr = [];
  for(let i = 0; i < str.length; i+=1) {
    if(str[i] === ")") {
      if(arr.length <= 0) {
        return false;
      } else {
        arr.shift();
      }
    }
    if(str[i] === "(") {
      arr.push(")")
    }
  }
  
  return arr.length ? false : true;
}