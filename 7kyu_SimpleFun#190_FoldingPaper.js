// 7kyu - Simple Fun #190: Folding Paper

// Task
// John was in math class and got bored, so he decided to fold some origami from a rectangular a × b sheet of paper (a > b). His first step is to make a square piece of paper from the initial rectangular piece of paper by folding the sheet along the bisector of the right angle and cutting off the excess part.


// After moving the square piece of paper aside, John wanted to make even more squares! He took the remaining (a-b) × b strip of paper and went on with the process until he was left with a square piece of paper.

// Your task is to determine how many square pieces of paper John can make.

// Example:
// For: a = 2, b = 1, the output should be 2.

// Given a = 2 and b = 1, John can fold a 1 × 1 then another 1 × 1.

// So the answer is 2.

// For: a = 10, b = 7, the output should be 6.

// We are given a = 10 and b = 7. The following is the order of squares John folds: 7 × 7, 3 × 3, 3 × 3, 1 × 1, 1 × 1, and 1 × 1.

// Here are pictures for the example cases.

let folding = (a,b) => (a % b) ? ~~(a/b) + folding(b, a%b) : a/b;