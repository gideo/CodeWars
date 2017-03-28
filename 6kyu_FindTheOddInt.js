// 6kyu - Find the odd int

// Description:

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  A = A.sort( (a, b) => a - b);
  var a = [], b = [];
  for(let i = 0; i < A.length; i +=1) {
    if(a.indexOf(A[i]) === -1) {
      a.push(A[i]);
      b.push(1);
    } else {
      b[a.indexOf(A[i])] += 1;
    }
  }
  for(let i = 0; i < b.length; i+=1) {
    if(b[i] % 2 !== 0) {
      return a[b.indexOf(b[i])];
    }
  }
}