// 7kyu - Recursion 101 

// In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
// More examples in tests cases. Good luck!

// Please also try Simple time difference

function solve(a,b){
    for (var i=0;i<24;++i) {
        if (b) a %= 2 * b;
        if (a) b %= 2 * a;
    }
    return [a,b];
}