// 6kyu - Next Polydivisible Number

// Given a non-negative number, return the next bigger polydivisible number, or an empty value like null or Nothing.

// A number is polydivisible if its first digit is cleanly divisible by 1, its first two digits by 2, its first three by 3, and so on. There are finitely many polydivisible numbers.

let p=[0n],v=[1n,2n,3n,4n,5n,6n,7n,8n,9n];
while(v.length) {
  p.push(...v);
  v=[].concat(...v.map(n=>[...'0123456789'].map(d=>BigInt(n+d)).filter(n=>n%BigInt((n+'').length)===0n)));
}

function next(n) {
  let [l,r] = [0,p.length];
  while(r-l>1) {
    let m=(l+r)>>1;
    p[m]>n?(r=m):(l=m);
  }
  return p[r]||null;
}