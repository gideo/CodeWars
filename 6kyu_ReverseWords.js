// 6 kyu - Reverse Words

// Write a reverseWords function that accepts a string a parameter, and reverses each 
// word in the string. Every space should stay, so you cannot use words from Prelude.

// Example:

// reverse_words("This is an example!") # returns  "sihT si na !elpmaxe"

let reverseWords = function(str) {
  return str.split(" ").map( a => a.split("").reverse().join("")).join(" ");
}
