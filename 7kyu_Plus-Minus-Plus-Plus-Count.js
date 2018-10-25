// 7kyu - Plus - minus - plus - plus - ... - Count

// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5]

// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |

// return 2;
const catchSignChange = a => a.slice(1).reduce((b, c, i) => b + +(c < 0 !== a[i] < 0), 0);