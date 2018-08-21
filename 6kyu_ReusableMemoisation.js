// 6kyu - Reusable Memoisation

// Recursive algorithms can sometimes be optimised with memoisation. 
// Often however, the memoisation is tightly coupled with the algorithm,
// making reuse difficult.

// Task
// Implement a reusable memoisation function
// that, given a function of one argument, returns a memoised function 
// of one argument.

// Functions of more than one argument can be memoised by currying the 
// function and memoising it for every single argument. This has easier 
// reusability than having a different memoisation component for every 
// number of arguments.
// ( This scenario will be tested. )

// Performance vs. reusability
// Maximum performance is not the goal of this kata; maximum simplicity 
// and reusability is.
// If, for any specific application, you need maximum performance, you 
// would probably customise your reusable memo function for the job, and 
// possibly couple it more tightly, thus shifting the balance away from 
// simplicity and reusability more towards performance. There's always a 
// balance to be struck, just as there is in resource allocation ( time 
// 	vs. space, CPU vs. memory ).

// Testing
// Your function will be tested with naive implementations of recursive 
// staples factorial, Ackermann and Fibonacci, and the algorithm for 
// finding a longest common subsequence.
// The submit tests are exactly the same as the example tests, only with 
// some random testing thrown in, but there are no surprises. If you pass 
// the example tests, you should pass the submit tests, and you can read 
// the example tests. ( It is recommended that you do. )

// Ackermann and the longest common subsequence implementation will test 
// multiply memoising a curried function.

// The datatype of the function argument can be a Number ( which will be 
// 	an integer ), a String, or an Object.


const memo = fn => {
  const cache = new Map();
  return x => {
    if(!cache.has(x)) cache.set(x, fn(x));
    return cache.get(x);
  }
}