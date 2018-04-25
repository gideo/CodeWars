// 7kyu - Automorphic Number (Special Numbers Series #6)
// Given a number determine if it Automorphic or not .

// Definition
// A number is called Automorphic number if and only if its square ends in 
// the same digits as the number itself.

// Notes
// The number passed to the function is positive

// Single-digit numbers are considered Automorphic number.

// Input >> Output Examples
// 1- autoMorphic (25) -->> return "Automorphic"
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .

// 2- autoMorphic (13) -->> return "Not!!"
// Explanation:
// 13 squared is 169 , Not ending with the same number's digits which are 69 .

// 3- autoMorphic (76) -->> return "Automorphic"
// Explanation:
// 76 squared is 5776 , Ends with the same number's digits which are 76 .

// 5- autoMorphic (225) -->> return "Not!!"
// Explanation:
// 225 squared is 50625 , Not ending with the same number's digits which are 225 .

// 4- autoMorphic (625) -->> return "Automorphic"
// Explanation:
// 625 squared is 390625 , Ends with the same number's digits which are 625 .

// 6- autoMorphic (1) -->> return "Automorphic"
// Explanation:
// 1 squared is 1 , Ends with the same number's digits which are 1 .

// 7- autoMorphic (6) -->> return "Automorphic"
// Explanation:
// 6 squared is 36 , Ends with the same number's digits which are 6

function automorphic(n){
  return (String(n) === String(Math.pow(n, 2)).slice(-String(n).length)) ? "Automorphic" : "Not!!";
}