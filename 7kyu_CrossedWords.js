// 7kyu - Crossed Words

// Crossed words
// This is a fun Kata for crossword lovers!
//     S
//     Y
//     N
//     T
// GRAPHICAL
//     E
//     S
//     I
//     S   
// Task
// Write a function that outputs two words crossing. The input is two strings. The function will output the first word horizontally and the second word will output vertically. The words cross at the point of the first instance of a common letter in the second word.
// Input: Two strings

// function crossedwords(str1, str2){
// }
// Rules
// There is a maximum of 20 characters for each word.
// The words may be a different lengths.
// Words must be capital letters and no other characters.
// The function returns a string.
// A space character is used to fill the blank spaces.
// Each line ends with the newline character.
// The words cross at the first instance of a common letter in the second word.
// The example:

// crossedwords("GRAPHICAL", "SYNTHESIS")
// returns the sample at the top.

function crossedwords(str1, str2) {
  let arr = [];
  for (i = 0; i < str2.length; i++) {
    let pos = str1.indexOf(str2.charAt(i));
    if (pos != -1) {
      for (let j = 0; j < i; j++) arr.push(" ".repeat(pos) + str2.charAt(j) + " ".repeat(str1.length - pos - 1));
      arr.push(str1);
      for (let h = i + 1; h < str2.length; h++) arr.push(" ".repeat(pos) + str2.charAt(h) + " ".repeat(str1.length - pos - 1));
      return arr.join("\n") + "\n";
    }
  }
}