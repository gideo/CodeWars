// 7kyu - Next Prime

// I don't think we have this specific prime kata on codewars, yet.
// It's really simple:
// Get the next prime number!
// You will get a number n (n>=0) and your task is to find the next prime number.
// e.g: nextPrime(5)=>7 || nextPrime(12)=>13

function isPrime(n) {
  if(n === 2) { return true; }
  if(n < 2 || n % 2 === 0) { return false; }
  for(let i = 3; i <= ~~Math.sqrt(n); i+=2) {
    if(n % i === 0)
      return false;
  }
  return true;
}

function nextPrime(n){
  n++;
  while(!isPrime(n)) n++;
  return n;
}