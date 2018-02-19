// 8kyu - Count of Positives/ Sum of Negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array:

// C#/Java: new int[] {} / new int[0];
// C++: std::vector<int>();
// JavaScript/CoffeeScript/PHP/Haskell: [];
// Rust: Vec::<i32>::new();
// ATTENTION!
// The passed array should NOT be changed. Read more here.

// For example:

// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    let pos = 0, neg = 0;
    for (let i = 0; i< input.length; ++i)
      (input[i] > 0) ? pos++ : neg += input[i]
    return [pos, neg];
}