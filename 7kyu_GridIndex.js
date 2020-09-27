// 7kyu - Grid Index

// You are given an n by n grid of characters for example:

// [['m', 'y', 'e'], 
//  ['x', 'a', 'm'], 
//  ['p', 'l', 'e']]
// You are also given a list of integers as input for example:

// [1, 3, 5, 8]
// You have to find the characters in these indexes of the grid if you think of the indexes as:

// [[1, 2, 3], 
//  [4, 5, 6], 
//  [7, 8, 9]]
// Remember that the indexes start from one and not zero.

// Then you output a string like this:

// 'meal'

const gridIndex = (grid, indices) => {
  let flat = grid.flat(2);
  return indices.map(indice => flat[indice -1]).join('');
}