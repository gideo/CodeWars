// 6kyu - Simple Fun # 254: Factorized GCD

// Task

// Find the greatest common divisor of two given integers. Each integer is given in the 
// form of its prime factorization - a sorted array of all prime factors of the number.

// Input/Output
// [input] integer array a

// A prime factorization of an integer greater than 1.

// 1 ≤ a.length ≤ 30,
// 2 ≤ a[i] ≤ 97.

// [input] integer array b
// A prime factorization of an integer greater than 1.

// 1 ≤ b.length ≤ 20,
// 2 ≤ b[i] ≤ 97.

// [output] an integer

// Example
// For a = [2, 3, 3, 3, 5] and b = [2, 2, 2, 2, 3, 3],

// the output should be 18.
// gcd(a, b) = gcd(270, 144).

function factorizedGCD(arr1, arr2){
    let [min, max] = arr1.length >= arr2.length ? [arr2, arr1] : [arr1, arr2];
    let sim = [];
    for(let i = 0; i < min.length; i++) {
        if(max.indexOf(min[i]) > -1) {
            sim.push(min[i]);
            max.splice(max.indexOf(min[i]), 1)
            min.splice(i, 1);
            i--
        }
    }
    return !sim.length ? 1 : sim.reduce((a,b)=> a * b);
}