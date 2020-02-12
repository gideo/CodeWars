// 7kyu - Regexp Basics - is it a eight bit unsigned number?

// Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

// It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

String.prototype.eightBitNumber = function() {
  return String(+this) == this && +this >= 0 && +this <= 255;
}