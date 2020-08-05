// 6kyu - IEEE 754 Floating Point Numbers 

// IEEE 754 is a standard for representing floating-point numbers (i.e. numbers that can have a fractional part and emulate real numbers).

// It is now used by most recent programming languages implementations.

// The 2 most widely used IEEE 754 formats are called the single precision (SP, encoded on 32 bits) and double precision (DP, encoded on 64 bits) formats.

// In C, these correspond respectively to the types float and double, in many (but not all) implementations, including the Codewars' system.
// The default Python implementation, CPython, is written in C and represents Python floats internally as C doubles, and thus as IEEE 754 DP values on most platforms, including Codewars.
// In JavaScript, all Numbers, including integers and special values like NaN, are IEEE 754 DP values.
// As you can see on the images below, IEEE 754 numbers are divided into 3 fields :

// a sign bit;
// an exponent encoded on 8 (SP) or 11 (DP) bits;
// a mantissa (also called significand) encoded on 23 (SP) or 52 (DP) bits.

// Your task is to write the function :

// function numToIEEE_754 (num)
// that takes a number as parameter, and shall return the binary IEEE 754 encoding of this number as a string, with fields separated by spaces for readability.

// Example
// numToIEEE_754(15.875)
// should return :

// "0 10000000010 1111110000000000000000000000000000000000000000000000"

function numToIEEE_754(num) {
  let view = new DataView(new ArrayBuffer(8));
  view.setFloat64(0, num);
  let s = view.getUint32(0).toString(2).padStart(32, '0') +
            view.getUint32(4).toString(2).padStart(32, '0');
  return s.replace(/(.{1})(.{11})(.*)/, '$1 $2 $3');
}