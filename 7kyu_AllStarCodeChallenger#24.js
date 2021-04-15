// 7kyu - All Star Code Challenger #24 

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #24

// Your friend David is an architect who is working on a triangle-focused design. He needs a quick way for knowing the measurement of a right triangle's side, only knowing two of the sides.

// He knows about the Pythagorean Theorem, but is too lazy to do the math. Help him by making 2 functions to ease his troubles.

// Create 2 functions:

// hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.

// leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.

// hypotenuse(3,4) // => 5
// leg(5,3) // => 4
// https://en.wikipedia.org/wiki/Pythagorean_theorem

// Note: Do NOT round the ouput number
// You do not have to verify if the input values are "proper", assume them to be non-zero integers

let hypotenuse = (a, b) => Math.sqrt(a*a+b*b);
let leg = (a, c) => Math.sqrt(a*a-c*c);