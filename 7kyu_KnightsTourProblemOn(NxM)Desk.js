// 7kyu - Knight's Tour Problem on (N x M) Desk 

// In this Kata your task is to check the possibility to solve the 'Knight's tour problem' for the desk of the current size.

// A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. If the knight ends on a square that is one knight's move away from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed; otherwise, it is open.

// In this Kata we will think only about open tours.

// Input
// n, m - desk size.

// 0 < n < 10.

// 0 < m < 10.

// Output
// Return true if a tour exist for the current desk. Otherwise return false

let check = (n,m) => n * m >= 20 || [m, n].sort().join('') === "34";