// 5kyu - Church Booleans 

// There are a few Katas about Church Numerals so let's talk about booleans.

// In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.

// Booleans are defined thusly (this definition is preloaded for you) :

// const True = T => F => T;
// const False = T => F => F;
// Your task will be to implement basic operators on booleans (using only lambdas and function application) : Not, And, Or and Xor.

// To help, the function unchurch comes preloaded, and returns the native boolean given a church boolean :

// unchurch(True); //true;
// Note: You should not use the following:

// numbers
// strings
// booleans
// boolean operators
// objects (curly brackets) or arrays (square brackets)
// regexp
// "new"

const Not = A => A(False)(True);
const And = A => B => A(B)(A);
const Or = A => B => A(A)(B);
const Xor = A => B => A(Not(B))(B);