// 7kyu - Game Hit the Target

// Hit the target
// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
// There will be only 1 arrow '>' and 1 target 'x'
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
// Examples:
// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', ' ', ' ', ' '], --> return true
// [' ', '>', ' ', 'x'],
// [' ', ' ', ' ', ' ']
// ]
// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', '>', ' ', ' '], --> return false
// [' ', ' ', ' ', 'x'],
// [' ', ' ', ' ', ' ']
// ]
// given matrix 4x4:
// [
// [' ', ' ', ' ', ' '],
// [' ', 'x', '>', ' '], --> return false
// [' ', '', ' ', ' '],
// [' ', ' ', ' ', ' ']
// ]

// In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
// Happy hacking as they say! 

let solution = m =>{ 
  let arr = m.filter(el => el.includes('>') && el.includes('x') )[0] || [];
  return arr.indexOf('>') < arr.indexOf('x');
}