// 6kyu - Simple Fun #259: Different Digits

// Task

// Given an array of integers arr, find the leftmost number that has a decimal 
// representation which doesn't contain any digit more than once. If there is no 
// such number, return -1 instead.

// Input/Output

// [input] array.integer arr

// Array of positive integers.

// 2 ≤ inputArray.length ≤ 100000,

// 10 ≤ inputArray[i] ≤ 10000000.

// [output] an integer

// Example

// For arr = [22, 111, 101, 124, 33, 30], the output should be 124

// For arr = [1111, 404], the output should be -1.

function uniqueDigit(num) {
    num = String(num);
    for(let i = num.length-1; i >= 0; i--){
        if(num.indexOf(num[i]) !== i) {
            return false;
        }
    }
    return true;
}

function differentDigitsNumberSearch(arr) {
    let curr = -1;
    for(let i = 0; i < arr.length; i++) {
        if(String(arr[i]).length > curr){
            if(uniqueDigit(arr[i])){
                curr = arr[i]
            }
        }
    }
    return curr;
}