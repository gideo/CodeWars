// 6kyu - Taylor Series

// Students of calculus learn that a large class of mathematical functions can be represented by an infinite polynomial expression. Values of the function can be calculated by summing sufficient terms of the series.

// For example, the functions exp, sin, and cos have the following series:

// exp x = 1 + x + x^2/2! + x^3/3! + x^4/4! + ...
// sin x = x - x^3/3! + x^5/5! - x^7/7! + x^9/9! - ...
// cos x = 1 - x^2/2! + x^4/4! - x^6/6! + x^8/8! - ...
// In this kata we will represent a Taylor series as a list of coefficient values, where the nth term is the coefficient of x^n in the Taylor series.

// Tasks:

// Provide (infinite) lists representing the coefficients of the series for exp, sin and cos.
// Write a function which evaluates a power series for a given value, by summing a given number of terms.

function fact(n) {
  let ret = 1;
  for (let i = 2; i <= n; i++)
    ret *= i;
  return ret;
}

function* exp() {
  let n = 0;
  while (true) yield 1 / fact(n++);
}

function* sin() {
  let n = 0;
  while (true) yield (-1) ** (n/2|0) / fact(n) * (n++&1);
}

function* cos() {
  let n = 0;
  while (true) yield (-1) ** (n/2|0) / fact(n) * (~n++&1);
}

function eval(series,x,n) {
  let val = 0, seq = series();
  for (let i = 0; i < n; i++)
    val += seq.next().value * x ** i;
  return val;
}