// 7kyu - Return Pyramids

// The task is very simple.

// You must to return pyramids. Given a number n you print a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\ 
// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\
// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\
// Note: an extra line feed character is needed at the end of the string. Case n=0 should so return "\n".

function pyramid(n){
  let s = "";
  for (let i=1; i <= n; i++)
    s += new Array(n-i+1).join(" ") + "/" + new Array(i*2-1).join(i==n ? "_" : " ") + "\\\n";
  return s;
}