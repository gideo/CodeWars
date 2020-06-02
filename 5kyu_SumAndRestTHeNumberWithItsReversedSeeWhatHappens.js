// 5kyu - Sum and Rest the Number with its Reversed and See What Happens

// The number 45 is the first integer in having this interesting property: the sum of the number with its reversed is divisible by the difference between them(absolute Value).

// 45 + 54 = 99 
// abs(45 - 54) = 9
// 99 is divisible by 9.
// The first terms of this special sequence are :

// n        a(n)
// 1        45
// 2        54
// 3        495
// 4        594
// Make the function sum_dif_rev()(sumDivRef in JavaScript and CoffeeScript), that receives n, the ordinal number of the term and may give us, the value of the term of the sequence.

// sumDifRev(n) -----> a(n)
// Let's see some cases:

// sumDifRev(1) -----> 45
// sumDifRev(3) -----> 495
// Important: All the integers that its reversed has leading zeroes should be discarded: ex: 1890 its reversed is 981 ("0981")

// Your code will be tested up to the first 65 terms, so you should think to optimize it as much as you can.

// (Hint: I memoize, you memoize, he memoizes, ......they (of course) memoize)

// Happy coding!!

var sumDifRev = (() => {
    let buf = [45,54,495,594];
    return n => {
        var i = buf[buf.length-1], j, d;
        while (buf.length<n)
            j = +[...++i+''].reverse().join(''), d = Math.abs(i-j),
            i%10 && d && !((i+j)%d) && buf.push(i);
        return buf[n-1];
    };
})();