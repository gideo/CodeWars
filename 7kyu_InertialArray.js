// 7kyu - Inertial Array

// An array is defined to be inertialif the following conditions hold:

// a. it contains at least one odd value  
// b. the maximum value in the array is even 
// c. every odd value is greater than every even value that is not the maximum value.
// eg:-

// So [11, 4, 20, 9, 2, 8] is inertial because 
// a. it contains at least one odd value [11,9] 
// b. the maximum value in the array is 20 which is even 
// c. the two odd values (11 and 9) are greater than all the even values that are not 
// equal to 20 (the maximum), i.e., [4, 2, 8]
// Write a function called isInertial that accepts an integer array and returns true if 
// the array is inertial; otherwise it returns false.

function isInertial(arr) {
    arr = arr.sort((a,b) => b - a);
    if(Math.abs(arr[0]) % 2 === 1 || arr.length <= 1) { return false; }
    let temp = [], idx = 0;
    for(let i = 1; i < arr.length; i++) {
        if(Math.abs(arr[i]) % 2 === 0) {
            temp = arr.slice(1, i);
            idx = i;
            break;
        }
    }
    if(idx === 0) { return true; }
    if(!temp.length) { return false;}
    for(let i = idx; i < arr.length; i++)
        if(Math.abs(arr[i]) % 2 === 1)
            return false;
    return true;
}