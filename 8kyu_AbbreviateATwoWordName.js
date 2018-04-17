// 8kyu - Abbreviate a Two Word Name

// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(n){
    n = n.toUpperCase().split(" ");
    return `${n[0][0]}.${n[1][0]}`;
}