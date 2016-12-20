// 6 kyu - Pi Approximation

// Description:

// The aim of the kata is to try to show how difficult it can be to calculate decimals of an 
// irrational number with a certain precision. We have chosen to get a few decimals of the 
// number "pi" using

// the following infinite series (Leibniz 1646–1716):

// PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.

// http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80

// To have a measure of the difficulty we will count how many iterations are needed to calculate 
// PI with a given precision.

// There are several ways to determine the precision of the calculus but to keep things easy we 
// will calculate to within epsilon of your language Math::PI constant. In other words we will 
// stop the iterative process when the absolute value of the difference between our calculation 
// and the Math::PI constant is less than epsilon.

// Your function

// iter_pi(epsilon) must return an array :
// [numberOfIterations, approximationOfPi]
// where approximation of PI has 10 decimals

// In Haskell you can use the function "trunc10Dble" (see "Your solution") and in Clojure you 
// can use the function "round" (see "Your solution") in order to avoid discusssions about the 
// result.

// Examples :

// your function calculates 1000 iterations and 3.140592653839794 but returns:
// iterPi(0.001) --> [1000, 3.1405926538]

function iterPi(epsilon) {
  var pi = 0, iter = 0, negPos = 1;
  while (Math.abs(Math.PI - (pi * 4)) >= epsilon) {
    pi += negPos/(iter * 2 + 1);
    iter += 1;
    negPos *= -1;
  }
  return [iter,  Math.round(pi * 4 * 10000000000) / 10000000000];
}