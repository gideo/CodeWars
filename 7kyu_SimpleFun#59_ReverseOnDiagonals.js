// 7kyu - Simple Fun #59: Reverse On Diagonals

// Task
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Example
// For the matrix

// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// the output should be:

// 9, 2, 7
// 4, 5, 6
// 3, 8, 1
// Input/Output
// [input] 2D integer array matrix

// Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000

// [output] 2D integer array

// Matrix with the order of elements on its longest diagonals reversed.

function reverseOnDiagonals(matrix) {
  let m = matrix.length, arr1 = [], arr2 = [];
  
  for(let i = 0; i < m; i++) {
    arr1.push(matrix[i][i]);
    arr2.push(matrix[i][m - 1 - i]);
  }
  
  arr1.reverse();
  arr2.reverse();
  
  for(let j = 0; j < m; j++) {
    matrix[j][j] = arr1[j];
    matrix[j][m - 1 - j] = arr2[j];
  }
  
  return matrix;  
}