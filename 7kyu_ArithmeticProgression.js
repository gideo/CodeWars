// 7kyu - Arithmetic Progression

// In your class, you have started lessons about arithmetic progression.
// Since you are also a programmer, you have decided to write a function 
// that will return the first 'n' elements of the sequence with the given 
// common difference 'r' and first element 'a'. Result should be separated 
// by comma and space.

// Example:

// arithmetic_sequence_elements(1, 2, 5) == '1, 3, 5, 7, 9'

// More info: https://en.wikipedia.org/wiki/Arithmetic_progression

function arithmeticSequenceElements(a,r,n) {
  return Array(n).fill().map((e,i)=>a+(i*r)).join(", ");
}