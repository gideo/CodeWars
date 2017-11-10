// 8kyu - Reversed Sequence

// Get the number n to return the reversed sequence from n to 1.

// Example : n==5 >> [5,4,3,2,1]

const reverseSeq = n => {
  return [...Array(n+1).keys()].slice(1, n+1).reverse();
};