// 6kyu - Data compression using run-length encoding

// Run-length encoding is a very simple form of lossless data compression in which 
// runs of data are stored as a single data value and count. (Refer to wikipedia for 
// 	a more in-depth description.)

// A simple form of RLE would encode the string AAABBBCCCD as 3A3B3C1D meaning, first 
// there are 3 A, then 3 B, then 3 C and last there is 1 D.

// Your task is to write a RLE encoder and RLE decoder using this technique. The texts 
// to encode will always consist of only uppercase characters, no numbers.

let encode = inp => inp.replace(/(\w)\1*/g, (a, b) => a.length + b);
let decode = inp => inp.replace(/(\d+)(\w)/g, (_, a, b) => b.repeat(a));