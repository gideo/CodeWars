// 6kyu - Greatest Common Factor of an Array

// Description:

// Write a function that returns the greatest common factor of an array of positive 
// integers. Your return value should be a number, you will only receive positive integers.

// greatestCommonFactor([46, 14, 20, 88]); // --> 2

function gcd(a,b) {
    return (!b) ? a : gcd(b, a%b);
}

function greatestCommonFactor(arr) {
    return arr.reduce((a,b) => gcd(a,b));
}