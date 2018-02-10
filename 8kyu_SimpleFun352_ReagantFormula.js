// 8kyu - Simple Fun #352 - Reagant Formula

// Now we will confect a reagent. There are eight materials to choose from, 
// numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 
// that represents material 1-8. Your task is to determine if the formula is 
// valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. 
// Each digit appears at most once.

function isValid(arr){
  return !(arr.includes(1) && arr.includes(2)) && !(arr.includes(3) && arr.includes(4)) && arr.includes(5) === arr.includes(6) && (arr.includes(7) || arr.includes(8));
}