// 5 kyu - Number of trailing zeros of N!

// Description:

// Write a program that will calculate the number of trailing zeros in a factorial of a 
// given number.

// http://mathworld.wolfram.com/Factorial.html

// N! = 1 * 2 * 3 * 4 ... N

// zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
// that has 2 trailing zeros 4790016(00)
// Be careful 1000! has length of 2568 digital numbers.

function zeros (n) {
    let s = 0;
    while(n > 0) {
        n = ~~(n/5);
        s += n;
    }
    return s;
}
