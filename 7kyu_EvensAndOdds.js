// 7kyu - Evens and Odds 

// This kata is about converting numbers to their binary or hexadecimal representation. If a number is even, convert it to binary. If a number is odd, convert it to hex.

const evensAndOdds = n => n.toString(n%2 ? 16 : 2);