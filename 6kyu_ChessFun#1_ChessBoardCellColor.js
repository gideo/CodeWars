// 6kyu - Chess Fun #1: Chess Board Cell Color

// Task

// Given two cells on the standard chess board, determine whether they have the same color or not.
// Example

// For cell1 = "A1" and cell2 = "C3", the output should be true.

// For cell1 = "A1" and cell2 = "H3", the output should be false.

// Input/Output

//     [input] string cell1

//     [input] string cell2

//     [output] a boolean value

//     true if both cells have the same color, false otherwise.

let chessBoardCellColor = (cell1,cell2) => squareColor(cell1) == squareColor(cell2);

let squareColor = n => n.charCodeAt(0) + n.charCodeAt(1) & 1;