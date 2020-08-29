// 6kyu - Error Correction #1 -Hamming Code 

// Translations appreciated

// Background information
// The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works. In this Kata we will implement the Hamming Code with bit length 3, this has some advantages and disadvantages:

// ✓ Compared to other versions of hamming code, we can correct more mistakes
// ✓ It's simple to implement
// x The size of the input triples
// Task 1: Encode function:
// First of all we have to implement the encode function, which is pretty easy, just follow the steps below.

// Steps:

// convert every letter of our text to ASCII value
// convert ASCII value to 8-bit binary string
// replace every "0" with "000" and every "1" with "111"
// Let's do an example:

// We have to convert the string hey to hamming code sequence.

// First convert it to ASCII values:
// 104 for h, 101 for e and 121 for y.


// 2. Now we convert the ASCII values to a 8-bit binary string:
// 104 -> 01101000, 101 -> 01100101 and 121 -> 01111001

// if we concat the binarys we get 011010000110010101111001


// 3. Now we replace every "0" with "000" and every "1" with "111":
// 011010000110010101111001 -> 000111111000111000000000000111111000000111000111000111111111111000000111

// That's it good job!

// Task 2: Decode function:
// Now we have to check if there happened any mistakes and correct them. Errors will only be a bit flip and not a loose of bits, so the length of the input string is always divisible by 3.

// example:

// 111 --> 101 this can and will happen
// 111 --> 11 this won't happen
// The length of the input string is also always divsible by 24 so that you can convert it to an ASCII value.

// Steps:

// Split the string of 0 and 1 in groups of three characters example: "000", "111"
// Check if an error occured: If no error occured the group is "000" or "111", then replace "000" with "0" and "111" with 1 If an error occured the group is for example "001" or "100" or "101" and so on... Replace this group with the character that occurs most often. example: "010" -> "0" , "110" -> "1"
// Now take a group of 8 characters and convert that binary number to decimal ASCII value
// Convert the ASCII value to a char and well done you made it :)
// Look at this example carefully to understand it better:

// We got a bit sequence:

// 100111111000111001000010000111111000000111001111000111110110111000010111

// First we split the bit sequence into groups of three:

// 100, 111, 111, 000, 111, 001 ....

// Every group with the most "0" becomes "0" and every group with the most "1" becomes "1":

// 100 -> 0 Because there are two 0 and only one 1

// 111 -> 1 Because there are zero 0 and three 1

// 111 -> 1 Because there are zero 0 and three 1

// 000 -> 0 Because there are three 0 and zero 1

// 111 -> 1 Because there are zero 0 and three 1

// 001 -> 0 Because there are two 0 and one 1

// Now concat all 0 and 1 to get 011010000110010101111001

// We split this string into groups of eight: 01101000, 01100101 and 01111001.

// And now convert it back to letters:

// 01101000 is binary representation of 104, which is ASCII value of h

// 01100101 is binary representation of 101, which is ASCII value of e

// 01111001 is binary representation of 121, which is ASCII value of y

// Now we got our word hey !

let encode = txt => txt.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join('').replace(/(.)/g, '$1$1$1');
let decode = bits => bits.match(/.{3}/g).map(n => n.split('').reduce((a, b) => a + Number(b), 0) > 1 ? '1' : '0').join('').match(/.{8}/g).map(b => String.fromCharCode(parseInt(b, 2))).join('');
