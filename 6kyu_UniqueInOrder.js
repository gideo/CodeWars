// 6kyu - Unique In Order

// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to 
// each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

let uniqueInOrder = function(iterable) {
  if(typeof iterable === 'string') { iterable = iterable.split('') }
  let arr = [], temp = iterable[0];
  for(let i = 0; i < iterable.length; i+=1) {
      (iterable[i+1] === temp && iterable[i+1] !== ' ') ? iterable[i+1] = ' ' : temp = iterable[i+1];
  }
  return iterable.filter( a => a != ' ');
}