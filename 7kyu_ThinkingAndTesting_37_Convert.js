// 7kyu - Thinking & Testing #37: Convert

// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testIt(f){
  let num = Math.round(+((f-32)/9*5)*100)/100
  return (num >= -273.15) ? num : "Invalid input!";
}