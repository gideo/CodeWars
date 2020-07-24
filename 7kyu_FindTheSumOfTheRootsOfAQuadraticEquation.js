// 7kyu - Find the Sum of the Roots of a Quadratic Equation 

// Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

// Quadratic equation - https://en.wikipedia.org/wiki/Quadratic_equation

function roots(a,b,c){
  let D = b * b - 4 * a * c;
  return (D < 0) ? null : +(-b / a).toFixed(2);
}