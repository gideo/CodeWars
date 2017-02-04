// 6 kyu - Simple Fun #79: Delete a Digit
// Description:

// Task

// Given an integer n, find the maximal number you can obtain by deleting exactly one 
// digit of the given number.
// Example

// For n = 152, the output should be 52;
// For n = 1001, the output should be 101.
// Input/Output

// [input] integer n
// Constraints: 10 ≤ n ≤ 1000000.
// [output] an integer

function deleteDigit(n) {
    n = String(n);
    for(let i = 0; i < n.length-1; i++){
        if(n[i] < n[i+1] && n[i] !== 0){
            return +(n.slice(0, i)+ n.slice(i+1))
        }
    }
    for(let i = 0; i < 9; i++){
        let idx =  n.indexOf(String(i))
        if(idx > -1){
            n = n.slice(0, idx) + n.slice(idx+1);
            break;
        }    
    }
    return +n;
}