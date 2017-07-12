// 7kyu - Find divisors number

// Find the number of divisors of a positive integer n.

// Example:

// divisors 4  = 3 -- 1, 2, 4
// divisors 5  = 2 -- 1, 5
// divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
// divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30

function getDivisorsCnt(n) {
    let temp = [n];
    for(let i = 1; i <= n/2; i++)
        if(n / i % 1 === 0)
            temp.push(i);
    return temp.length;
}