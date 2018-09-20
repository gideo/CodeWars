// 7kyu - ASCII Shift Encryption/Decryption

// Ascii Shift Encryption/Decryption
// The goal of this kata is to create a very simple ASCII encryption 
// and decryption. The encryption algorithm should change each character 
// relative to its location in the string.

// Example:
//   P | A | S | S | W | O | R | D # Plaintext
// + 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (add)
//   P | B | U | V | [ | T | X | K # Ciphertext
// The decryption should reverse this:

//   P | B | U | V | [ | T | X | K # Ciphertext
// - 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 # Shift (subtract)
//   P | A | S | S | W | O | R | D # Plaintext
// You may assume input string will be :

// uppercase letters only
// length < 26

let asciiEncrypt = p => p.replace(/./g, (e, i) => String.fromCharCode(e.charCodeAt(0) + i));
let asciiDecrypt = c => c.replace(/./g, (e, i) => String.fromCharCode(e.charCodeAt(0) - i));