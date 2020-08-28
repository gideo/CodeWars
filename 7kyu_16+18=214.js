// 7kyu - 16+18=214

// For this Kata you will have to forget how to add two numbers together.

// The best explanation on what to do for this kata is this meme :

function add (num1, num2) {
  let str1 = num1 > num2 ? num1: num2, str2 = num2 <= num1 ? num2 : num1, sum = '';
  str1 = str1.toString().split('');        
  str2 = str2.toString().split('');
  str2 = new Array(str1.length - str2.length).fill(0).concat(str2);    
  str1.forEach( (item, index) => {        
      sum += parseInt(str2[index]) + parseInt(item);
  } )
  
  return parseInt(sum);
}