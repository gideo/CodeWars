// 6 kyu - Sum #1

// Description:
// PUZZLE #1. SU

// Assignment:
// Write a function named sum which performs addition in the way shown below

// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
// NOTE: Pay attention that last brackets are left empty to indicate end of operations

function sum(n) {
    let a = (n) ? n : 0, 
        f = function sum(b) {
        if(isNaN(b)) return a;
        a += b;
        return sum;
    }
    return (n) ? f : 0;
}