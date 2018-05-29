// 7kyu - Balanced Number (Special Number Series #1)
// Balanced number is the number that The sum of all digits to the left of the 
// middle digit(s) and the sum of all digits to the right of the middle digit(s) 
// are equal.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, 
// e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 
// 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number 
// is balanced or not, e.g 413023 is a balanced number because the left sum and 
// right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// 1- balancedNum (7) ==> return "Balanced"   .
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , 
// then It's Balanced

// 2- balancedNum (295591) ==> return "Not Balanced" .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)

// and the sum of all digits to the right of the middle digits (10) are equal , 
// then It's Not Balanced

// Note : The middle digit(s) are 55 .

// 3- balancedNum (959) ==> return "Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (9)

// and the sum of all digits to the right of the middle digits (9) are equal , 
// then It's Balanced

// Note : The middle digit is 5 .

// 4- balancedNum (27102983) ==> return "Not Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (10)

// and the sum of all digits to the right of the middle digits (20) are equal , 
// then It's Not Balanced

// Note : The middle digit(s) are 02 .



function balancedNum(number) {
  let str = '' + number, num = str.length, h = num >> 1;
  let sum = str => str.split('').reduce((a, b) => a + +b, 0);
  
  return `${sum(str.slice(0, h - ((num & 1) == 0 ? 1 : 0))) != sum(str.slice(h + 1)) ? 'Not ' : ''}Balanced`;
}