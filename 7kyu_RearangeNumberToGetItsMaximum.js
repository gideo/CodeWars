// 7kyu - Rearange Number to Get Its Maximum 

// Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

// maxRedigit(123); // returns 321

let maxRedigit = function(num) {
  if(num < 100 || num > 999)
    return null
  return +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
};