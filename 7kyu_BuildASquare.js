// 7kyu - Build a square

// I will give you an integer. Give me back a shape that is as long and wide
// as the integer. The integer will be a whole number between 0 and 50.

// Example: Integer = 3; I expect a 3x3 square back just like below as a string.

// Solution:

// +++
// +++
// +++

let generateShape = int => [...Array(int)].map(_ => "+".repeat(int)).join("\n")