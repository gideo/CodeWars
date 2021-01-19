// 6kyu - Loose Change 

// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
// Examples
// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

function looseChange(cents){
  let obj = {
    Nickels:0,
    Pennies:0,
    Dimes:0,
    Quarters:0};
  if (cents <= 0) return obj;
  obj.Pennies = Math.floor(cents%25%10%5);
  obj.Nickels = Math.floor(cents%25%10/5);
  obj.Dimes = Math.floor(cents%25/10);
  obj.Quarters = Math.floor(cents/25);
  return obj;
}