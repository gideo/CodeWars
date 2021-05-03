// 5kyu - (Read for) Prime Time 

// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
  let arr = [];
  loop: for (let i = 2; i <= num; i++) {
    for (let j = 0; j <= arr.length; j++)
      if (i % arr[j] === 0) continue loop;
    arr.push(i);
  }
  return arr;
}