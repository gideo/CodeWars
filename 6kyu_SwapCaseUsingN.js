// 6kyu - Swap Case Using N

// Your job is to change the given string s using a non-negative integer n.

// Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

// You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

// Examples
// swap("Hello world!", 11)  -->  "heLLO wORLd!"
// ...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

// H e l l o   w o r l d !
// 1 0 1 1 1 x 0 1 1 1 0 x
// ^   ^ ^ ^    ^ ^ ^
// More examples
// swap("gOOd MOrniNg", 7864)  -->  "GooD MorNIng"
// swap("", 11345)  -->  ""
// swap("the lord of the rings", 0)  -->  "the lord of the rings"

function swap (string, positiveInteger) {
  let bits = Number(positiveInteger).toString(2), idx = 0;
  return string.replace(/[a-z]/gi, letter => {
    if (idx >= bits.length) idx = 0;
    if (bits[idx++] === '0') return letter;
    return letter > "Z" ? letter.toUpperCase() : letter.toLowerCase();
  });
}