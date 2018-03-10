// 7kyu - Credit Card Issuer Checking

// Given a credit card number we can determine who the issuer/vendor is with 
// a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to 
// determine the card issuer for a given card number. If the number cannot be 
// matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Language specific notes
// Python
// To be PEP8 compliant please use the function name get_issuer() instead of 
// getIssuer().

// C/C++
// In C/C++ the input is a numeric string. The return value in C is not freed.

// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(n) {
  var n = n.toString();
  if (/^3[4|7]\d{13}$/.test(n)) return "AMEX";
  if (/^6011\d{12}$/.test(n)) return "Discover";
  if (/^5[1-5][0-9]{14}$/g.test(n)) return "Mastercard";
  if (/^4([0-9]{12}|[0-9]{15})$/.test(n)) return "VISA";
  return "Unknown";
}