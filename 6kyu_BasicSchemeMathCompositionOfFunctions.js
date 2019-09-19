// 6kyu - Basic Scheme Math Composition of Functions

// Scheme Reference. This is a more difficult version of the Basic Scheme Math Interpreter.

// Your challenge: create a function that interprets Scheme-like math commands and returns the value resulting from the operation. We will only be working with the four main math operators (+ - * /) but the functions are nested this time.

// Syntax consists of an open parenthesis, a math operator, a space, space-separated arguments, and a close parenthesis. Example: (+ 2 4). All inputs will be valid. Keep in mind that we're composing functions now, so the inputs will be a little more complex, such as (+ (* 4 2) (/ 4 2)).

// That example, (+ (* 4 2) (/ 4 2)), can be rewritten as (4 x 2) + (4 / 2) and is calculated as follows:

// 1. 4 x 2 = 8  --> (+  8 (/ 4 2))
// 2. 4 / 2 = 2  --> (+ 8 2)
// 3. 8 + 2 = 10 --> 10
// If no arguments are provided, return the following (You won't get '(/)'):

// '(+)'         // 0
// '(-)'         // 0
// '(*)'         // 1
// if one argument is provided, return the following:

// '(+ n)'      // n    Returns the sum of the arguments: 0 + n...
// '(- n)'      // -n   Returns the additive inverse of n: 0 - n
// '(- -n)'     // n    Returns the additive inverse of n: 0 - (-n)
// '(* n)'      // n    Returns the product of the arguments 1 * n...
// '(/ n)'      // 1/n  Returns the multiplicative inverse of n: 1 / n
// Examples of valid commands (do not parse -0 to 0...):

// '(+ 2 4)'                     // 6
// '(+ (* 4 2) (/ 4 2))'         // 10
// '(+ 4 (- 4 (+ 2 2)) -4)'      // 0
// '(- (+ 2 4) (+ 2 4))'         // 0
// '(* (+ 2 4) (- 2 4) (/ 4 2))' // -24
// '(/ (+ 4 (* 2 4)) 4)'         // 3
// '(+ 0 (/ 1 (* 14 (* 14 14 14 14) (* 14 14 14 14))))'  // 4.8400258247050876e-11
// '(/ 1 (* 0 -1))'              // -Infinity
// '(* 1 -0)'                    // -0
// '(* 0 -1)'                    // -0

// '(+ 3 4 (+ 10 5) (+ (+ 17 7) (+ 7 2)))'  // 55
// '(- 3 4 (- 10 5) (- (- 17 7) (- 7 2)))'  // -11
// '(* 3 4 (* 10 5) (* (* 17 7) (* 7 2)))'  // 999600
// '(/ 3 4 (/ 10 5) (/ (/ 17 7) (/ 7 2)))'  // 0.5404411764705882

function scheme(cmd) {
  let OBJS = {
    '+': (args) => args.reduce((a, b) => a + b, 0),
    '-': (args) => args.length <= 1 ?
                        args.reduce((a, b) => a - b, 0) :
                        args.slice(1).reduce((a, b) => a - b, args[0]),
    '*': (args) => args.reduce((a, b) => a * b, 1),
    '/': (args) => args.length === 1 ?
                        1 / args[0] :
                        args.slice(1).reduce((a, b) => a / b, args[0])
  }
  function evaluate(tokens) {
    let arr = tokens.shift();
    if (!isNaN(+arr)) return +arr;
    if (arr !== '(') throw 'Illegal token ' + arr;
    let op = tokens.shift(), args = [];
    while (tokens[0] !== ')') args.push(evaluate(tokens));
    tokens.shift();
    return OBJS[op](args);
  }
  let tokens = cmd.match(/\-?\d+|[()+\-*/]/g);
  return evaluate(tokens);
}

