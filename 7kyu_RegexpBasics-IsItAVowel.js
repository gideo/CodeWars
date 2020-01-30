// 7kyu - Regexp Basics - Is it a Vowel

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
}