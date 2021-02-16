// 7kyu - Guess the Sequence 

// You read the title.

// You must guess a sequence.

// It will have something to do with the number given.

// Example:

//   x = 16

//   result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
// be ready for large x

// Goodluck!

let sequence = x => [...Array(x).keys()].map(item => item + 1).sort();