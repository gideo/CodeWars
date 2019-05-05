// 6kyu - LCM Cardinality

// A pair of numbers has a unique LCM but a single number can be the 
// LCM of more than one possible pairs. For example 12 is the LCM of
// (1, 12), (2, 12), (3,4) etc. For a given positive integer N, the 
// number of different integer pairs with LCM is equal to N can be 
// called the LCM cardinality of that number N. In this kata your job 
// is to find out the LCM cardinality of a number.

let lcmCardinality = n => sum(n);

const sum = n => {
  let ans = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let t = 0;
      while (n % i === 0) {
        n /= i;
        t++;
      }
      ans *= t * 2 + 1;
    }
  }
  if (n > 1) ans *= 3;
  return Math.floor((ans--)/2)+1;
}