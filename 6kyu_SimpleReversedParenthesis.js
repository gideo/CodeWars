// 6kyu - Simple Reversed Parenthesis 

// Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

// For example:

// solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
// solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
// solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
// Parenthesis will be either "(" or ")".

// More examples in the test cases.

// Good luck.

function solve(s){
  if(s.length%2 == 1) return -1;
  let ct = 0, num = 0;
  for(let i=0;i<s.length;i++) {
    if(s[i] == '(') ct++;
    else if (s[i] == ')') {
      if(ct > 0) ct--;
        else {
          ct++;
          num++;
        }
    }
  }
  num += ct>>1;
  return num;
}