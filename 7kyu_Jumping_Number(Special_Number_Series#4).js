// 7kyu - Jumping Number (Special Numbers Series #4)

// If You Complete the Special Numbers Series, You Know By Now How To 
// Manipulate (Monkey With) Numbers Effectively ,

// If Not You Can Take a Look To Get How Things Work :
// Balanced Number
// STRNOGN - Strong Number
// Disarium Number

// Well , It's Time To Expand Our Series For More :
// Given a Natural number , Determine If It a Jumping Number Or Not .
// A Number Is Called As a Jumping Number If All Adjacent Digits In It Differ By 1.

// Notes :

// 1- The Number Passed To The Function Is Positive Natural [1:2,147,483,647] , 
// 	(No Negatives or Zeroes).
// 2- The difference between ‘9’ and ‘0’ is not considered as 1.
// 3- All single digit numbers are considered as Jumping Numbers. 

// If Any Of The Previous Points (Notes) Is Not Clear , 
// Pay Attention To The Examples Clarify Everything .
// Input :: Output Examples ::

// 1- 
// jumpingNumber(9) // return "Jumping!!"
// Explanation :: 
// It's Single Digit Number
// 2- 
// jumpingNumber(23) // return "Jumping!!"
// Explanation ::
// Adjacent Digits In It Differ By 1 
// 3- 
// jumpingNumber(32) // return "Jumping!!"
// Explanation ::
// Adjacent Digits In It Differ By 1
// 4- jumpingNumber(79) // return "Not!!"
// Explanation ::
// Adjacent Digits In It Don't Differ By 1
// 5- jumpingNumber(4343456) // return "Jumping!!"
// Explanation ::
// Adjacent Digits In It Differ By 1
// 6- jumpingNumber(556847) // return "Not!!"
// Explanation ::
// Adjacent Digits In It Don't Differ By 1
// 7- jumpingNumber(89098) // return "Not!!"
// Explanation ::
// Adjacent Digits In It Don't Differ By 1
// Hope you enjoy it .. Awaiting for crafting best Practice and Clever Codes ..
// Enjoy Learning !!!
// Zizou

function jumpingNumber(n) {
  let d = n.toString().split("").map(a => +a);
  for (i = 1; i < d.length; i++)
    if (Math.abs(d[i] - d[i-1]) > 1)
      return "Not!!";
  return "Jumping!!";
}