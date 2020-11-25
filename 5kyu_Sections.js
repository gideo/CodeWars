// 5kyu - Sections 

// Consider the following equation of a surface S: z*z*z = x*x * y*y. Take a cross section of S by a plane P: z = k where k is a positive integer (k > 0). Call this cross section C(k).

// Task
// Find the number of points of C(k) whose coordinates are positive integers.

// Examples
// If we call c(k) the function which returns this number we have

// c(1) -> 1
// c(4) -> 4
// c(4096576) -> 160
// c(2019) -> 0 which means that no point of C(2019) has integer coordinates.

function c(k) {
  let n = Math.sqrt(k), res = 1;
  if (Math.floor(n) !== n) return 0; 
  for (let i = 2; i <= n; i++) {
    if (n % i !== 0) continue;
    let count = 0;
    while (n % i === 0) {
        n = n / i;
        count++;
    }
    res *= ((count-1) * 3) + 4;
  }            
  return res;
}