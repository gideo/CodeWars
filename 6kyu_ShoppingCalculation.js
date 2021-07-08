// 6kyu - Shopping Calculation

// This kata is about shopping calculation. There are products, product's prices, customers and customer's total money.

// This kata takes an input as List of string, and this list contains statements which give information about product name, product price, customer name and customer budget.

// These statements can have 3 basic form like; (is, has, buys)
//   "Apple is $5."
//   "Alice has $26."
//   "Alice buys 2 apples."
// Your task is to write a function that calculates the result which is [(string,string,string)] and holds [(Customer Name, Customer Total Money, Bought Products)]

// "is" statement gives info about product name and its price.
// "has" statement gives info about customer name and his/her money.
// "buys" statement gives info about customer name, bought product name and bought product count.
// You need to split bought products by comma and space(", ") like "2 apples, 5 oranges, 1 grape"

// For Example:
//   input => [ "Apple is $5.",
//              "Banana is $7.",
//              "Orange is $2.",
//              "Alice has $26.",
//              "John has $41.",
//              "Alice buys 2 apples.",
//              "John buys 1 banana.",
//              "Alice buys 5 oranges." ]
// Alice has $26 and buys 2 apples, 5 oranges for $20 (2 * 5 + 5 * 2), she keeps $6.

// John has $41 and buys 1 banana for $7 (1 * 7), he keeps $34.

// So output => [ ("Alice", "$6", "2 apples, 5 oranges"),
//                ("John", "$34", "1 banana") ]
// The order of statements is not guaranteed. As an example: you could receive a buy statement before knowing the cost of the product.

// For Example:
//   input => [ "John has $41.",
//              "Apple is $5.",
//              "Alice buys 2 apples.",
//              "Alice has $26.",
//              "John buys 1 banana.",
//              "Alice buys 5 oranges.",
//              "Banana is $7.",
//              "Orange is $2." ]
// Notes:

// Currency is always preceded by the $ symbol.
// Output must be ordered by the placement of customers in the input list.
// Products must be ordered by the order in which they were bought by that customer.
// All input statements will be valid. No need to check for invalid statements.
// Customers will always have enough money for their purchases. No need to validate for negative balances.
// Inputs guarantee that the same customer will not perform multiple purchases for the same product.
// Tips:

// Be careful about plural suffixes.


function shoppingCalculation(input) {
  let arr = [], start = [], buys = [];
  for (let l of input) {
    l = l.slice(0, l.length-1).split(' ');
    switch (l[1]) {
      case 'is':
        arr.push([l[0].toLowerCase(), l[2].slice(1)|0]);
        break;
      case 'has':
        start.push([l[0], l[2].slice(1)|0]);
        break;
      case 'buys':
        buys.push([l[0], l[2]|0, l[3]]);
    }
  }
  let out = [];
  for (let [name, money] of start) {
    let list = [];
    for (let [bname, n, item] of buys) {
      if (bname != name) continue;
      list.push(n + ' ' + item);
      for (let [i, p] of arr) {
        if (i == item || n > 1 && i + 's' == item) {
          money -= p * n;
          break;
        }
      }
    }
    out.push([name, '$'+money, list.join(', ')]);
  }
  return out;
}