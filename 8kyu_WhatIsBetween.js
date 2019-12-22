// 8kyu - What is Between?

// Write a function taking two parameters and returning an int array of all elements between the input parameters and including them.

let between = (q,q2) => Array.from({length:(q2-q+1)},(_,i)=>i+q);