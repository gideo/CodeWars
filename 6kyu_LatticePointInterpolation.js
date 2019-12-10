// 6kyu - Lattice Point Interpolation

// In mathematics, an Integer Valued Polynomial (IVP) is a polynomial which always returns an integer when an integer is supplied for its variable. Note that the standard-form coefficients of such a polynomial are not necessarily integers, but they cannot be irrational. For example, 0.5 x2 + 0.5 x is an IVP.

// Your task is to accept a list of integer lattice points and find the smallest-degree IVP which passes through all of them. The lattice points will always be given starting with x = 0 and moving upwards, so some typical calls would be

// interpolate([0, 1, 3, 7]); // y = 0 when x = 0, y = 3 when x = 2, etc.
// interpolate([4, 3]);
// interpolate([1, 1, 2, 3, 5]);
// and the result would follow as a descending-degree-ordered list of coefficients of the resulting polynomial. However, because the coefficients are not necessarily integers in "standard form", there is a dilemma: do we accept rational numbers and deal with the numerical precision errors in some way, or do we represent the polynomials in another fashion such that all the coefficients are integers?

// In this kata, we choose the latter. While the standard form of a polynomial would arise from calculations based on any interpolation method (such as Lagrange Form, Bernstein Form, or Newton Form) and then grouping by powers of x, you may choose any interpolation method you wish, but then group by Binomial terms in x.

// Suppose our set of points is [0, 1, 3, 6]. One interpolation method is by finite differences:

// 0
//    >  1
// 1        >  1
//    >  2        >  0
// 3        >  1
//    >  3
// 6
// Using this method, the first column (starting on the left) is our original value set. The second column comes from taking a value in the first column and subtracting the value immediately above it. The third column follows in the same manner, and so on to the last column (the single value 0). This method just so happens to produce the coefficients we need to return, and these coefficients are the first value of every column, which are [0, 1, 1, 0]. Note that the farthest-right column is the highest degree, so this is the degree we can ignore and finally return the coefficients as [1, 1, 0].

// As another way of looking at this, if our interpolation method results in (x2 + x)/2, we would convert to Binomial form by first subtracting all multiples of xC2 = x * (x-1) / 2!, with remainder x. Next we would subtract all multiples of xC1 = x / 1! = x, leaving no remainder. Finally, we subtract all multiples of xC0 = 1, again with no remainder. This process yields coefficients 1, 1, 0, so we can write

// (x2 + x) / 2 := 1 * xC2 + 1 * xC1 + 0

// and if we were to return this set of coefficients, we would return (in descending-degree-order) [1, 1, 0].

// In general, let a polynomial p(x) of degree N be represented in Binomial Form with coefficients a0, a1, ... aN as

// p(x) := a0 + a1 * x + a2 * x * (x - 1) / 2!

// a3 * x * (x - 1) * (x - 2) / 3! + ...
// aN * x * (x - 1) * ... * (x - N + 1) / N!
// p(x) := a0 + a1 * x + a2 * xC2 + ... +aN * xCN
// In this form, we would have the following:

// interpolate([0, 1, 3, 7]); // returns [1, 1, 1, 0]
// interpolate([1, 2, 4, 7]); // returns [1, 1, 1]
// Further information can be found by reading about Binomial Coefficients or about Finite Differences.

function interpolate(pts) {
  let arr = [];
  while(pts.length){
    let x = [];
    arr.push(pts[0]);
    pts.forEach((v,idx) => { if(idx) x.push(v-pts[idx-1]);})
    pts = x;
  }
  while(arr.length && !arr[arr.length-1]) 
    arr.pop();
  return arr.reverse();
}

