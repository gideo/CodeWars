// 7kyu - White or Black?

// Complete the function that returns the color of the given square on a normal, 8x8 chess board:

// chessboard

// Examples
// "a", 8  ==>  "white"
// "b", 2  ==>  "black"
// "f", 5  ==>  "white"

let mineColor = (line,number) => ['white','black'][('abcdefgh'.indexOf(line) + number) % 2];