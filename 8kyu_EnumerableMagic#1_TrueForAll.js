// 8kyu - Enumerable Magic #1 - True for All? 

// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

// Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all

let all = (arr, fun) => arr.every(fun);