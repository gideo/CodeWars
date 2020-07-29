// 5kyu - Count '9s' from 1 to n 

// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a postive integer.

// number9(8) //should return 0
// number9(9) //should return 1
// number9(10) //should return 1
// number9(98) //should return 18
// number9(100) //should return 20

function number9(n){
  let count = 0;
  for (let i = 1; i <= n; i *= 10){
    let curr = Math.floor(n / i);
    count += Math.floor( curr / 10) * i;
    if( curr % 10 === 9)
      count += (n % i) + 1;
  };
  return count;
};