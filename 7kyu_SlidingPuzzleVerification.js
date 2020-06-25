// 7kyu - Sliding Puzzle Verification 

// Given a board of NxN, distributed with tiles labeled 0 to N² - 1(inclusive):

// A solved grid will have the tiles in order of label, left to right, top to bottom.

// Return true if the board state is currently solved, and false if the board state is unsolved.

// Input will always be a square 2d array.

// For example, a 2x2 solved grid:

// [ [0, 1],
//   [2, 3] ]
// A 2x2 unsolved grid:

// [ [2, 1],
//   [0, 3] ]
  
let isSolved = (board, i=0) => board.every( r=>r.every(v=>v===i++) );