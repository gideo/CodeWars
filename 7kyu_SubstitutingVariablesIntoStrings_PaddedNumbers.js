// 7kyu - Substituting Variables ino Strings: Padded Numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

let solution = v => "Value is " + ("00000" + v).slice(-5);
