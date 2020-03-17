// 6kyu - Simple Number Divisibility 

// In this Kata, you will be given a number and your task will be to rearrange the number so that it is divisible by 25, but without leading zeros. Return the minimum number of digit moves that are needed to make this possible. If impossible, return -1 ( Nothing in Haskell ).

// For example:

// solve(521) = 3 because:
//     a) Move the digit '1' to the front: 521 -> 512 -> 152. The digit '1' is moved two times.
//     b) Move '5' to the end: 152 -> 125. The digit '5' is moved one time, so total movement = 3.
// Of all the ways to accomplish this, the least digit moves = 3.

// solve(100) = 0. Number already divisible by 25.
// solve(1) = -1. Not possible to make number divisible by 25.

// solve(0) is not tested.
// More examples in test cases.

// Good luck!

function solve(n){
    let str = n + '', n2 = str.lastIndexOf('2'), n5 = str.lastIndexOf('5'), n7 = str.lastIndexOf('7'),
        n00 = str.lastIndexOf('0'), n01 = str.lastIndexOf('0', n00 - 1),
        swap = (a, b) => {
        let res = [...str];
        res[a] = res[b] = '';
        return res.join('').match(/^0*/)[0].length;
    }
    let src = (a, b) => a < 0 || b < 0 ? Infinity : 2 * str.length - a - b - 2 - (a < b) + swap(a, b),
        min = Math.min(src(n01, n00), src(n2, n5), src(n5, n00), src(n7, n5));
    return min == Infinity ? -1 : min;
}