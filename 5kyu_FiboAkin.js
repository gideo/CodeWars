// 5kyu - Fibo Akin

// Be u(n) a sequence beginning with:

// u[1]  = 1,  u[2]  = 1,  u[3]  = 2,  u[4]  = 3,  u[5]  = 3,  u[6] = 4,

// u[7]  = 5,  u[8]  = 5,  u[9]  = 6,  u[10] = 6,  u[11] = 6,  u[12] = 8,

// u[13] = 8,  u[14] = 8,  u[15] = 10, u[16] = 9,  u[17] = 10, u[18] = 11,

// u[19] = 11, u[20] = 12, u[21] = 12, u[22] = 12, u[23] = 12 etc...
// How isu[8] calculated?
// We have u[7] = 5 and u[6] = 4. These numbers tell us that we have to go backwards from index 8 to index 8 - 5 = 3 and to index 8 - 4 = 4 so to index 3 and 4.

// u[3] = 2 and u[4] = 3 hence u[8] = u[3] + u[4] = 2 + 3 = 5.

// Another example: let us calculate u[13]. At indexes 12 and 11 we have 8 and 6. Going backwards of 8 and 6 from 13 we get indexes 13 - 8 = 5 and 13 - 6 = 7.
// u[5] = 3 and u[7] = 5 so u[13] = u[5] + u[7] = 3 + 5 = 8 .

// Task
// Express u(n) as a function of n, u[n - 1], u[n - 2]. (not tested).
// Given two numbers n, k (integers > 2) write the function length_sup_u_k(n, k) or lengthSupUK or length-sup-u-k returning the number of terms u[i] >= k with 1 <= i <= n. If we look above we can see that between u[1] and u[23] we have four u[i] greater or equal to 12: length_sup_u_k(23, 12) => 4
// Given n (integer > 2) write the function comp(n) returning the number of times where a term of u is less than its predecessor up to and including u[n].
// Examples:
// u(900) => 455 (not tested)
// u(90000) => 44337 (not tested)

// length_sup_u_k(23, 12) => 4
// length_sup_u_k(50, 10) => 35
// length_sup_u_k(500, 100) => 304

// comp(23) => 1 (since only u(16) < u(15))
// comp(100) => 22
// comp(200) => 63

let obj = { 1: 1, 2: 1 };

function lengthSupUK(n, k) {
    let ct = 0;
    for (let i = 1; i <= n; i++) {
      if (!obj[i]) obj[i] = obj[i - obj[i - 1]] + obj[i - obj[i - 2]];
      if (obj[i] >= k) ct++;
    }
    return ct;
}

function comp(n) {
  let ct = 0;
  for (let i = 3; i <= n; i++) {
    if (!obj[i]) obj[i] = obj[i - obj[i - 1]] + obj[i - obj[i - 2]];
    if (obj[i] < obj[i - 1]) ct++; 
  }
  return ct;
}