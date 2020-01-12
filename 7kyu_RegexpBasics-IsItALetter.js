// 7kyu - Regexp Basics - Is it a Letter?

// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

String.prototype.isLetter = function() {
  return /^[a-z]$/i.test(this);
};