// 6kyu - String Transformer

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

let stringTransformer = str => str.split('').map(a => a >= 'a' && a <= 'z' ? a.toUpperCase() : a >= 'A' && a <= 'Z' ? a.toLowerCase() : a).join('').split(' ').reverse().join(' ');