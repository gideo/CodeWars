function isPrime(n) {
    if(n === 2) { return true;}
    if(n <= 1 || n % 2 === 0) { return false;}
    for(let i = 3; i <= ~~Math.sqrt(n); i+=2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

let primeProduct = function(n) {
    if(n <= 3) { return 0; }
    for(let i = ~~(n/2); i > 0; i--) {
        if(isPrime(n-i) && isPrime(i)) {
            return (n-i) * i;
        }
    }
    return 0;
}