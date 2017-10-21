// 6kyu - String Average

// You are given a string of numbers between 0-9. Find the average of these numbers 
// and return it as a floored whole number (ie: no decimal places) written out as a 
// string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

let averageString = function(str) {
  let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  
  str = str.split(" ").map(n => arr.indexOf(n));
  if(str.includes(-1)) { return "n/a";}
  
  let num = ~~(str.reduce((a,b) => a + b)/(str.length));
  return (str.length) ? arr[num] : "n/a";
};