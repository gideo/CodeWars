// 6kyu - Quick (n choose k) Calculator 

// You may be familiar with the concept of combinations: for example, if you take 5 cards from a 52 cards deck as you would playing poker, you can have a certain number (2,598,960, would you say?) of different combinations.

// In mathematics the number of k combinations you can have taking from a set of n elements is called the binomial coefficient of n and k, more popularly called n choose k.

// The formula to compute it is relatively simple: n choose k==n!/(k!*(n-k)!), where ! of course denotes the factorial operator.

// You are now to create a choose function that computes the binomial coefficient, like this:

// choose(1,1)==1
// choose(5,4)==5
// choose(10,5)==252
// choose(10,20)==0
// choose(52,5)==2598960
// Be warned: a certain degree of optimization is expected, both to deal with larger numbers precision (and their rounding errors in languages like JS) and computing time.

let choose = (n,k) => (k === 0)? 1 : choose(n - 1,k - 1) * n/k;