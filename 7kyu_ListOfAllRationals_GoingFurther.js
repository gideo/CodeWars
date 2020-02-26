// 7kyu - List of all Rationals - Going Further

// Here's a way to construct a list containing every positive rational number:

// Build a binary tree where each node is a rational and the root is 1/1, with the following rules for creating the nodes below:

// The value of the left-hand node below a/b is a/a+b
// The value of the right-hand node below a/b is a+b/b
// So the tree will look like this:

//                        1/1
//                   /           \ 
//             1/2                  2/1
//            /    \              /     \
//        1/3        3/2        2/3       3/1
//       /   \      /   \      /   \     /   \
//    1/4    4/3  3/5   5/2  2/5   5/3  3/4   4/1

//  ...
// Now traverse the tree, breadth first, to get a list of rationals.

// [ 1/1, 1/2, 2/1, 1/3, 3/2, 2/3, 3/1, 1/4, 4/3, 3/5, 5/2, .. ]
// Every positive rational will occur, in its reduced form, exactly once in the list, at a finite index.

// In the kata, we will use tuples of type [ Number, Number ] to represent rationals, where [a,b] represents a / b

// Using this method you could create an infinite list of tuples:

// function* allRationals() => [Number,Number] // forever
// matching the list described above:

// allRationals => [ [1,1], [1,2], [2,1], [1,3], [3,2], .. ]
// However, constructing the actual list is too slow for our purposes. Instead, study the tree above, and write two functions:

// // return the value at the given index
// function ratAt(BigInt) => [Number,Number]

// // return the index of the given rational
// function indexOf([Number,Number]) => BigInt
// For example:

// ratAt(10n) = [5,2]
// indexOf([3,5]) = 9n

function ratAt(n) {
  return function ratAt(n) {
    if (n === 1n) return [1,1];
    if (n % 2n) { 
      const [a,b] = ratAt(n/2n); 
      return [a+b,b]; 
    }
    else { 
      const [a,b] = ratAt(n/2n); 
      return [a,a+b]; 
    }
  } ( n+1n ) ;
}

function indexOf(rational) {
  return function indexOf([a,b]) {
    if (a < b)
      return indexOf([a,b-a]) * 2n;
    else if (a > b)
      return indexOf([a-b,b]) * 2n + 1n;
    else
      return 1n;
  } (rational) - 1n ;
}