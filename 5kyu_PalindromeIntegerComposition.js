// 5kyu - Palindrome Integer Composition 

// The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2 = 595.

// There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums. Note that 1 = 0^2 + 1^2 has not been included as this problem is concerned with the squares of positive integers.

// Given an input n, find the count of all the numbers less than n that are both palindromic and can be written as the sum of consecutive squares.

// For instance: values(1000) = 11. See test examples for more cases.

// Good luck!

// This Kata is borrowed from Project Euler #125

// If you like this Kata, please try:

// Fixed length palindromes

// Divisor harmony

function values(high) {
    let rev = n => {
      let res = 0
      while(n > 0){ 
         res = res * 10 + n % 10; 
         n = (n/10)|0   
       } 
      return res;  
    }
    
    let arr = [], n = 1;
    while (n * n < high) {
        let temp = n + 1, total = n * n + temp * temp;
        while (total < high) {
            if (total == rev(total)) arr.push(total)
            temp++
            total += temp * temp;
        }
        n++;
    }
    return (Array.from(new Set(arr))).length;
}