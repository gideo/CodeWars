// 7kyu - Say Me Please Operations

// You have a string with N numbers, starting with the third number each number is the result of an operation performed using the previous two numbers.

// Write a function which returns a string of the operations in order and separated by a comma and a space (e.g. "subtraction, subtraction, addition").

// Available operations are:

// 1) addition
// 2) subtraction
// 3) multiplication
// 4) division
// Example: for string "9 4 5 20 25"

// Your function must return:

// "subtraction, multiplication, addition"

// Because:

// 9 - 4 = 5 - substraction,
// 4 * 5 = 20 - multiplication,
// 5 + 20 = 25 - addition.
// All input data is valid.
// Number of numbers in input string >= 3.
// For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list.
// Integer division should be used. 

function sayMeOperations(str) {
  let result = '', arr = str.split(' ');
  for(let i = 2; i < arr.length; i++){
    if(+arr[i] == +arr[i-2] + +arr[i-1]){
      result += 'addition, ';
      continue;
    }
    if(+arr[i] == +arr[i-2] - +arr[i-1]){
      result += 'subtraction, ';
      continue;
    }
    if(+arr[i] == +arr[i-2] * +arr[i-1]){
      result += 'multiplication, ';
      continue;
    }
    result += 'division, ';
    continue;
  }
  return result.substr(0, result.length - 2);
}