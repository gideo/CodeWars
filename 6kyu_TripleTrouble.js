// 6 kyu - Triple Trouble

// Description:

// Write a function

// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight 
// triple of a number at any place in num1 and also a straight double of the same 
// number in num2.

// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1
// If this isn't the case, return 0

let tripledouble = function(num1, num2){
    let match = String(num1).match(/(\d)\1{2}/g);
    for(let i in match)
        if(String(num2).indexOf(match[i].substr(1)) > -1) { return 1; }
    return 0;
}