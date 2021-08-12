// 5kyu - Diophantine Equation

// In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

// In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

// x2 - 4 * y2 = n
// (where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

// If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

// Examples:
// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"
// Hint:
// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)

function solequa(n) {
  let arr = [];
  for ( let d, x, y, i=1; i <= Math.sqrt(n); i++ )
    if ( Number.isInteger( d = n/i ) && Number.isInteger( x = (d+i)/2) && Number.isInteger( y = (d-i)/4))
      arr.push([x,y]);
  return arr;
}