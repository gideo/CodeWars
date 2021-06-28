// 6kyu - Sort the Number Sequence

// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description:
// You are given a number sequence(an array) that contains some positive integer and zero.

// [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
// It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...

// Your task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end); Second, sort all sub sequence according to their sum value(ascending order too).

// Arguments:
// sequence: The number sequence.
// Results & Note:
// The result is the sorted number sequence.
// If some sub sequences have the same sum value, sort them according to their original order.
// Some Examples
// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
// [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
// [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

// sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
// [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]

function sortSequence(seq){
  let arr = [[]];
  seq.map(v => v ? arr[arr.length-1].push(v) : arr.push([]));
  return arr.map(v => v.sort((a, b) => a-b))
           .sort((a, b)=> sum(a)-sum(b) || arr.indexOf(a) - arr.indexOf(b))
           .reduce((ar, v)=> ar.concat(v, 0));
}

let sum = arr => arr.reduce((sum, a)=> sum + a, 0);
