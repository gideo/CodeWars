// 6kyu - Primorial of a Number 

// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.

function numPrimorial(n){
  let res = 1;
  nxt:
  for (let i = 2,count = 0; count < n; i++) {
    for (let j = 2; j < i; j++)
      if (i % j == 0) continue nxt;
    count++;
    res = res * i;
  }
  return res;
}