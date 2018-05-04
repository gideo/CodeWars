// 7kyu - STRONGN Strong Number (Special_Numbers_Series #2)

// A number is called strong number if the sum of the factorial of its digits is equal to number itself.

// For example: 145 since

// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Our kata is simple, given a positive number find out if the number is strong number or not, returning result as a string. The number passed is always positive (number > 0 ).

// Examples
// strong_num (1)    return "STRONG!!!!"
// strong_num (2)    return "STRONG!!!!"
// strong_num (123)  return "Not Strong !!"
// strong_num (150)  return "Not Strong !!"
// Hope you enjoy it .. Awaiting for crafting best Practice and Clever Codes ..

// Enjoy Learning !!!

// Zizou

function strong(n) {
  let ans = 0;
  String(n).split("").forEach(x => {
    let sum = 1;
    for(let i = x; i > 1;i--) sum *= i;
    ans += sum; 
  });
  return (ans!==n) ? "Not Strong !!" : "STRONG!!!!";
}