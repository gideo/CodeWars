// 7kyu - Simple Rotated Palindromes

// In this Kata, you will be given a string and your task is to determine if 
// that string can be a palindrome if we rotate one or more characters to the left.

// solve("4455") = true, because after 1 rotation, we get "5445" which is a 
// palindrome solve("zazcbaabc") = true, because after 3 rotations, we get 
// "abczazcba", a palindrome
// More examples in test cases. Input will be strings of lowercase letters or 
// numbers only.

// Good luck!

function solve(st){   
    st = st.split("");
    for(let i = 0; i < st.length; i++){
      var lastLetter = st.shift();
      st.push(lastLetter);
      let rev = st.slice();
      if(st.join("") === rev.reverse().join("") && st.length > 1) 
        return true
    }
    return false;
}