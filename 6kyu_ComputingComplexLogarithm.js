// 6kyu - Computing the complex logarithm function

// Compute the complex logarithm at any given complex number, accurate to at least 
// 1 in 10^-12. The imaginary part should be inside the interval (−π, π] (i.e if 
// 	the imaginary part is exactly π, keep it as is).

// Note: You shouldn't try to compute the value of this function at the poles. 
// Please return null/NULL/nil/None (C#: throw an ArgumentException, Java: throw 
// 	an ArithmeticException) if this happens.

let log = ([real, imag]) => (real) ? [Math.log(Math.hypot(real,imag)), Math.atan2(imag,real)] :  null;