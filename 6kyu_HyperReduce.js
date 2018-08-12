// 6kyu - HyperReduce
// Hi, it's Vaults. Welcome to my second kata!   
// ＼(＾O＾)／
// Background info

// To be able to complete the kata, you will need to be able to comprehend 
// these two resources:

//     Array.prototype.reduce()
//     Currying

// Definition

// With that in the back of our minds, let's make a wholly insane function! 
// The idea is that our function returns a reduce function that is agnostic 
// to the amount of function calls, arguments and array nests in between. 
// What?! Let's look at some examples to clarify:

// const adder = (accumulator, next) => accumulator + next;
// const add = hyperReduce(adder, 0);

// add has become a function that would have the following inputs and outputs

//     add(3) //=> 3
//     add(3, 3, 3) //=> 9
//     add(3, 3, 3)(3) //=> 12
//     add(3, 3, 3)([3,3]) //=> 15
//     add(3, 3, 3)([3,[3]]) //=> 15
//     add([[[[[[[[[[3]]]]]]]]]])() => 3

// Misc

// You are also expected to be able to handle multiplication, division, 
// concatenation and composition. Couldn't think of a legitimate use case 
// except for code challenges. Enjoy implementing this :) If there's 
// anything I left vague, look at the test cases. Anything else was 
// unintentional so please let me know.

const hyperReduce = (f, a) => (...args) => {
  let normalize = (...args) => args.reduce((r, a) => ((Array.isArray(a) ? r.push(...normalize(...a)) : r.push(a)), r), []);
  return (v => Object.assign(hyperReduce(f, v), { valueOf: () => v }))(normalize(...args).reduce(f, a));
}