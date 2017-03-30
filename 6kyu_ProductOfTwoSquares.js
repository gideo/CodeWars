// 6kyu - Product of two squares

// Description:

// Given an integer (n), the goal of this Kata is to find every possible two integer 
// whose product of their squares give that number i.e. n = a2 x b2!

// For Example: squareProduct(256) should return [[1,16],[2,8],[4,4]]

// Rules

// Results should not contain duplicate arrays. [2,8] and [8,2] are considered 
// duplicates
// [0, Infinity] is not a valid answer
// An integer with no product of squares should return an empty array []

let squareProduct = function(n) {
    let solutions = [], root = Math.sqrt(n);
    for(let i = 1; i <= Math.sqrt(root); i++){
        if(Math.sqrt(n/Math.pow(i, 2)) % 1 === 0) {
            solutions.push([i, Math.sqrt(n/Math.pow(i, 2))])
        }
    }
    return solutions;
}