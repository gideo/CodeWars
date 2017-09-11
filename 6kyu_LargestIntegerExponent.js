// 6kyu - Largest integer exponent

// Write a method named getExponent(n,p) that returns the largest integer 
// exponent x such that px evenly divides n. if p<=1 the method should return 
// null (throw an ArgumentOutOfRange exception in C#).

function getExponent(n, p) {
    if(p < 2) { return null; }
    let num = 0;
    
    while(n % p === 0) {
        num++;
        n/=p;
    }
    return num;
}