// 6 kyu - Give me a diamond
//
// Description:

// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. 
// She likes diamonds, and wants a diamond string from James. Since James doesn't know how to 
// make this happen, he needs your help.

// Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") 
// characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number 
// provided as input represents the number of *’s printed on the middle line. The line above and 
// below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s 
// for each line continues until a line with a single * is printed at the top and bottom of the 
// 	figure.

// Return null if input is even number or negative (as it is not possible to print diamond with 
// 	even number or negative number).

let diamond = function(len) {
  let dia = "", arr = [];
  if(len % 2 === 0 || len < 1) { return null; }

  for(let i = len, space = 0; i >= 1; i-=2, space+=1) {
    arr.push(" ".repeat(space) + "*".repeat(i) + "\n");
    if(i < len) {
      arr.unshift(" ".repeat(space) + "*".repeat(i) + "\n");
    }
  }
  
  return arr.join('');
}