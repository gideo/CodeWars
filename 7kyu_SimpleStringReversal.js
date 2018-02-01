// 7kyu - Simple String Reversal

// In this Kata, we are going to reverse a string while maintaining spaces.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space after the first three characters, hence "edo cruo"

// solve("your code rocks") = "skco redo cruoy"
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and 
// in some cases spaces.

// Good luck!

function solve(str){
  var arr = [...str.split(` `).join(``)];
  return str.replace(/\S/g, a => arr.pop());
}