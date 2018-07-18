// 7kyu - Infinitely Nested Radicals

// Hello,

// I am Jomo Pipi

// and today we will be evaluating an expression like this:

// (there are an infinite number of radicals)

// \LARGE \sqrt{x+\sqrt{x+\sqrt{x+\sqrt{x...}}}}

// for a given value x

let fn = x=> .5 + Math.sqrt(.25 + x);