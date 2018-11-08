// 7kyu - String Merge!

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// StringMerge("hello", "world", "l")       ==>  "held"
// StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"
// StringMerge("jason", "samson", "s")      ==>  "jasamson"
// StringMerge("wonderful", "people", "e")  ==>  "wondeople"

let stringMerge = (s1, s2, l) => s1.slice(0,s1.indexOf(l))+s2.slice(s2.indexOf(l));