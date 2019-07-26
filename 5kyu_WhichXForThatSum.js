// 5kyu - Which X for that Sum?

// Consider the sequence U(n, x) = x + 2x**2 + 3x**3 + .. + nx**n where x is a real number and n a positive integer.

// When n goes to infinity and x has a correct value (ie x is in its domain of convergence D), U(n, x) goes to a finite limit m depending on x.

// Usually given x we try to find m. Here we will try to find x (x real, 0 < x < 1) when m is given (m real, m > 0).

// Let us call solve the function solve(m) which returns x such as U(n, x) goes to m when n goes to infinity.

// Examples:
// solve(2.0) returns 0.5 since U(n, 0.5) goes to 2 when n goes to infinity.

// solve(8.0) returns 0.7034648345913732 since U(n, 0.7034648345913732) goes to 8 when n goes to infinity.

// Note:
// You pass the tests if abs(actual - expected) <= 1e-12

let solve = m => (2 * m + 1 -  Math.sqrt(4 * m + 1)) / (2 * m);    