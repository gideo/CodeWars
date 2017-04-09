// 5kyu - Largest 5 digit number in a series

// Description:

// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 digits.

// Complete the solution so that it returns the largest five digit number found within 
// the number given.. The number will be passed in as a string of only digits. It should 
// return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

let solution = function(digits) {
    digits = String(digits);
    let largest = 0;
    for(let i = 0; i < digits.length-4; i++) {
        if(+digits.substr(i,5) > largest)
            largest = +digits.substr(i,5);
    }
    return largest;
}