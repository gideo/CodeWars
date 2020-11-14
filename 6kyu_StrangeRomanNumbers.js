// 6kyu - Strange Roman Numbers 

// Many years ago, Roman numbers were defined by only 4 digits: I, V, X, L, which represented 1, 5, 10, 50. These were the only digits used. The value of a sequence was simply the sum of digits in it. For instance:

// IV = VI = 6
// IX = XI = 11
// XXL = LXX = XLX = 70
// It is easy to see that this system is ambiguous, and some numbers could be written in many different ways. Your goal is to determine how many distinct integers could be represented by exactly n Roman digits grouped together. For instance:

// solve(1) = 4, because groups of 1 are [I, V, X, L]. 
// solve(2) = 10, because the groups of 2 are [II, VI, VV, XI, XV, XX, IL, VL, XL, LL] corresponding to [2,6,10,11,15,20,51,55,60,100]. 
// solve(3) = 20, because groups of 3 start with [III, IIV, IVV, ...etc]



function solve(n){
  var count = 0
  for (var i = 0; i <= Math.min(n, 8); i++) {
    let lim = Math.min(i ? 4 : 8, n - i) + 1
    for (var j = 0; j < lim; j++) count += n - i - j + 1
  }
  return count
}