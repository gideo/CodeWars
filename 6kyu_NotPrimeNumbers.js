// 6kyu - Not Prime Numbers

// You are given two positive integers a and b (a < b <= 20000). Complete 
// the function which returns a list of all those numbers in the interval [a, b) 
// whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes 
// themselves.

// Be careful about your timing!

// Good luck :)

function perms(arr, s, st, res) {
    if (st.length >= s)  res.push(st);
    else for (var i = 0; i < arr.length; ++i) perms(arr, s, st.concat(arr[i]), res);
    return res;
}
    
function isPrime(num) {
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  for(let i = 3, j = Math.sqrt(num); i <= Math.sqrt(num); i+=2) {
    if(num%i === 0) return false;
  }
  return true;
}

function notPrimes(a,b){
    var out = [];
    for (var i = 2; i <= b.toString().length; ++i) {
        var arr = perms([2, 3, 5, 7], i, [], []);
        for (var j of arr){
            var t = parseInt(j.map(e=>String(e)).join(""))
            if (t > a && t < b && !(isPrime(t))) out.push(t)
        }
    }
    return out;
}