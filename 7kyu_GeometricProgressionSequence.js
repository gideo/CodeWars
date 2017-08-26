// 7kyu - Geometric Progression Sequence

// In your class, you have started lessons about geometric progression. 
// Since you are also a programmer, you have decided to write a function that will 
// print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space

// Example:

// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

let geometricSequenceElements = (a,r,n) => Array.from(Array(n)).map((_, i) => a * Math.pow(r, i)).join(", ");