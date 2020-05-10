// 6kyu - Church Booleans - Prefix is Overrated

// In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.

// Booleans are defined thusly ( this definition is Preloaded for you ) :

// const False = t => f => f ;
// const True  = t => f => t ;
// Your task will be to implement basic operators on booleans (using only lambdas and function application) : not, and, or.

// However!
// Your combinators will not be applied in prefix position: not will be applied postfix, and and and or will be applied infix.
// To make this at all possible, they will consist of single letters, like this:

// True (n)(o)(t) == False
// True (a)(n)(d) (False) == False
// False (o)(r) (True) == True
// Actual testing will be extensional; the resulting function should behave correctly as false or true, but need not actually be false or true.
// Getting the types right is part of the puzzle; there are multiple solutions anyway.
// Yes, you can only define one n and one o.

// For Bonus Points and Bragging Rights
// xor is missing!

// If you can make xor work, please publish a fork with the additional testing and earn Eternal Bragging Rights ( or at least until Christmas ).

const n = y=>y==t?False:_=>False
const o = _=>True
const t = 0
const x = undefined
const a = _ => z => z;
const d = _ => False;
const r = z => z;