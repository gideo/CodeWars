// 7kyu - Digits Average

// Given an integer, take the (mean) average of each pair of consecutive digits. 

// Keep doing this process until you have a single integer, then return that integer. 

// e.g.

// digitsAverage(246)
// average of 2 and 4 is 3, average of 4 and 6 is 5
// so after first iteration 246 => 35
// average of 3 and 5 is 4
// so digitsAverage(246) returns 4
// If the average of two digits is not a whole number, round the result up. e.g.

// digitsAverage(89)
// average of 8 and 9 is 8.5 ==> return 9

function digitsAverage(input) {
  if (input < 10) { return input; }
  
  while (input > 9) {
    input = String(input); 
    let arr = [];
    for (let i = 0; i < input.length-1; i++) 
      arr.push(Math.round((+input[i]+ +input[i+1])/2)); 
    input = parseInt(arr.join(''));
    if (input<10) 
      return input;
  }
}