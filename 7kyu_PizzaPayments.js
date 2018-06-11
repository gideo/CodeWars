// 7kyu - Pizza Payments

// Kate and Michael want to buy a pizza and share it. Depending on the price of the 
// pizza they are going to divide the costs.

// If the pizza is less than €5,- Michael is paying. Kate will contribute no more 
// than €10. Michael will pay at least 2/3 of the costs.

// How much is Michael going to pay? Remember to calculate the amount in euros, 
// with two decimals if necessary.

function michaelPays(c) {
  let p = c < 5 ? c : c * 2 / 3;
  return Math.round(Math.max(p, c - 10) * 100) / 100;
}