// 7kyu - Chess Fun #3: Chess Knight 

// Task
// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example
// For cell = "a1", the output should be 2.

// For cell = "c2", the output should be 6.

// Input/Output
// [input] string cell

// String consisting of letter+number - coordinates of the knight on an 8 × 8 chessboard in chess notation.

function chessKnight(cell) {
  let arr = [[1,2],[1,-2],[-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  let isValidPosition = (cell, move) => {
      let rank = String.fromCharCode(cell.charCodeAt(0)+move[0]);
      let file = parseInt(cell[1]) + move[1];
      return rank>="a" && rank<="h" && file >= 1 && file <= 8;
  }
  return arr.filter(move => isValidPosition(cell, move)).length;
}