// 7kyu - Distributing Candies Fairly

// There are some candies need to be distributed to some children as 
// fair as possible(means that the variance of result needs to be as small 
// 	as possible), but I don't know how to distribute, so I need your 
// help. Your assignment is to write a function with signature distribute
// (m, n) in which m represents candies's number while n represents 
// children's number, the function should return a List(or Array etc. 
// depends on the specific language) which contains the number of candies' 
// each child gains.

// Notice
// The candy can't be divided into pieces.
// The list's order doesn't matter.
// Requirement
// The case m < 0 is equivalent to m == 0.
// If n <= 0 the function should return empty list.
// If the candies is not enough to distribute, you should fill 
// corresponding number with 0.
// Examples
// distribute(-5,  0) # shoud be [] 
// distribute( 0,  0) # shoud be [] 
// distribute( 5,  0) # shoud be [] 
// distribute(10,  0) # shoud be [] 
// distribute(15,  0) # shoud be [] 
// distribute(-5, -5) # shoud be [] 
// distribute( 0, -5) # shoud be [] 
// distribute( 5, -5) # shoud be [] 
// distribute(10, -5) # shoud be [] 
// distribute(15, -5) # shoud be []
// distribute(-5, 10) # shoud be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 0, 10) # shoud be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 5, 10) # shoud be [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
// distribute(10, 10) # shoud be [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// distribute(15, 10) # shoud be [2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
// Input
// m: Integer (m <= 100000)
// n: Integer (n <= 1000)
// Ouput
// [Integer]

function distribute(m, n) {
  if(n <= 0) return []
  let arr = Array(n).fill(0);
  while(m > 0)
    arr = arr.map(x => (m > 0) ? (m--, ++x) : x);
  return arr;
}