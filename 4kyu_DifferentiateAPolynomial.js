// 4kyu - Differentiate A Polynomial

// Create a function that differentiates a polynomial for a given value of x.

// Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

// Assumptions:
// There will be a coefficient near each x, unless the coefficient equals 1 or -1.
// There will be an exponent near each x, unless the exponent equals 0 or 1.
// All exponents will be greater or equal to zero
// Examples:
// differenatiate("12x+2", 3)      ==>   returns 12
// differenatiate("x^2+3x+2", 3)   ==>   returns 9

function getMononomValue (eq, x) {
  let [k, power] = eq.split(/x\^?/);
  k = k === '-' ? -1 : k === '' ? 1 : +k;
  power = (power === '' ? 1 : +power);
  return (power * k * Math.pow(x, power - 1));
}

let differentiate = (e,p) => e.match( /(-?\d*x(\^\d+)?)/g).reduce( (sum, mono) => sum + getMononomValue(mono, p), 0 );