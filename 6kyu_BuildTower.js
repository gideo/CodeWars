// 6 kyu - Build Tower
/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *
*/

let towerBuilder = function(n) {
  let arr = [];
  for(let i = 0; i < n; i += 1) {
    arr.push(Array(n-i).join(' ') + Array(2+(i*2)).join('*') + Array(n-i).join(' '))
  }
  return arr;
}

// Alternative

let towerBuild = n => [...Array(n)].map((_,i) => " ".repeat(n-i-1) + "*".repeat(i*2+1) + " ".repeat(n-i-1));
