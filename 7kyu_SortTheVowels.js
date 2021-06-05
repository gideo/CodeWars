// 7kyu - Sort the Vowels!

// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "Codewars" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Case doesn't matter
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

let sortVowels = s => typeof(s) == 'string' ? (s.split('').map(x => /[aeiou]/i.test(x) ? '|'+x : x+'|').join('\n')) : '';