// 7kyu - Arithmetic Sequence! 

// A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
// If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
// An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on] )
// Else if (pun) f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.
// Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
// There are some sequences that aren't arithmetic nor are they geometric.
// Here is a link to feed your brain : Sequence !

// You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.(That is, adding a constant to move to the next element in the "set").

// The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

//     first is the first value in the 0 INDEX.
//     n is the index of the value we want.
//     c is the constant added between the terms.

// Remember that first is in the index 0 .. just saying ...

let nthterm = function(first, n, c){
 return first + n * c   
}