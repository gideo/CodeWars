// 6kyu - Simple Fun #116:Prime String

// Task
// The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.

// For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").

// Given a string determine if it is prime or not.

// Input/Output
// [input] string s

// string containing only lowercase English letters

// [output] a boolean value

// true if the string is prime, false otherwise



let primeString = s => (s + s).indexOf(s, 1) == s.length;