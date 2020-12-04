// 7kyu - Shared Bit Counter 

// In this Kata you need to write the method SharedBits that returns true if 2 integers share at least two '1' bits. For simplicity assume that all numbers are positive

// For example

// seven = 7                  //0111
// ten = 10                   //1010
// fifteen = 15               //1111
// SharedBits(seven, ten)     //false
// SharedBits(seven, fifteen) //true
// SharedBits(ten, fifteen)   //true
// seven and ten share only a single '1' (at index 3)
// seven and fifteen share 3 bits (at indexes 1, 2, and 3)
// ten and fifteen share 2 bits (at indexes 0 and 2)
// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.

let sharedBits = (a,b) => (a & b).toString(2).replace(/0/g, '').length > 1;
