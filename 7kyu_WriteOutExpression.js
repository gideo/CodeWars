// 7kyu - Write out Expression! 

// Math hasn't always been your best subject, and these programming symbols always trip you up!

// I mean, does ** mean *"Times, Times"* or *"To the power of"*?

// Luckily, you can create a function to write out the expressions for you!

// The operators you'll need to use are:

// { '+':   'Plus ',
//   '-':   'Minus ',
//   '*':   'Times ',
//   '/':   'Divided By ',  
//   '**':  'To The Power Of ',
//   '=':   'Equals ',
//   '!=':  'Does Not Equal ' }
// These values will be stored in the preloaded dictionary OPERATORS just as shown above.

// But keep in mind: INVALID operators will also be tested, to which you should return "That's not an operator!"

// And all of the numbers will be 1 to10! Isn't that nice!

// Here's a few examples to clarify:

// expressionOut("4 ** 9") === "Four To The Power Of Nine"
// expressionOut("10 - 5") === "Ten Minus Five"
// expressionOut("2 = 2")  === "Two Equals Two"
// Good luck!

const numbers = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten'
  };
  
function expressionOut(expr) {
  let error = '', result = expr.split(' ')
    .map((e, i) => ((i % 2) ? OPERATORS[e] : numbers[e]) || (error = "That's not an operator!"))
    .join(' ')
    .replace(/\s+/g, ' ');
   return error || result;
}