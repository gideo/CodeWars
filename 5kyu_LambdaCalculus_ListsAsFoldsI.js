// 5kyu - Lambda Calculus: Lists as Folds I

// In Lambda Calculus, lists can be represented as their right fold. A right fold wiki takes a combining function and an initial value, and returns a single combined value for the whole list, eg.:

// < x y z > = λ c n. c x (c y (c z n))
// in JavaScript syntax:

// [ x, y, z ] = c => n => c(x)(c(y)(c(z)(n))) ;
// A list is not just the data in it; it also encapsulates operations on it. This representation encodes both a list's data and all possible operations on it, because any operation on a list can, with the right combining function and initial value, be expressed as a right fold ( even a left fold. but we're not going there ).

// Booleans can be represented as a function that chooses between two arguments.
// Both these representations can be given type in System F wiki .
// This kata will use those encodings.

// Task
// Write functions cons and snoc. Both take an element and a list and return a new list with the element added to the list, in first and last position respectively.

// Write function map. It takes a transforming function and a list and returns a new list with every element transformed.

// Finally, write function filter. It takes a predicate and a list and returns a new, filtered list. ( A predicate is a function that takes a value and returns a Boolean. )

// You can define constants in Lambda Calculus syntax only: variables, function expressions, and function calls. Declare your definitions with const. Function expressions must use fat arrow syntax ( x => ). You can define and use helper constants. Recursion is not restricted.

// Preloaded
// False = t => f => f                             // Church Boolean
// True  = t => f => t                             // Church Boolean

// nil = c => n => n                               // constant: the empty list
// isEmpty = xs => xs ( _ => _ => False ) (True)   // returns a Church Boolean indicating if a list is empty
// head    = xs => xs ( x => _ => x ) (undefined)  // returns the first element of a list      // list must not be empty
// tail    = xs => something quite clever          // returns a list without its first element // list must not be empty
// Examples
// cons ( 1 ) ( nil )      =>  < 1 >
// cons ( 2 ) (< 1 >)      =>  < 2 1 >
// snoc ( 1 ) ( nil )      =>  < 1 >
// snoc ( 2 ) (< 1 >)      =>  < 1 2 >
// map (sqr) (< 1 2 >)     =>  < 1 4 >
// filter (odd) (< 1 2 >)  =>  < 1 >
// Notes
// get and set are definitely possible. Implementing those, however, means either using encoded numerals or dealing with numerical arithmetic and comparison operators, which is beyond the scope of this kata. For a real challenge, solve class List ( JS only ) using this encoding.

const cons = x => xs => c => n => c(x)(xs(c)(n))

const snoc = x => xs => c => n => xs(c)(c(x)(n))

const map = f => l => c => n => l( x => xs => c(f(x))(xs) )(n)

const filter = f => l => c => n => l( x => xs => f(x)(c(x)(xs))(xs) )(n)