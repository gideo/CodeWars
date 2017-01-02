// 6 kyu - Reverse Vowels in a String

// Description:

// In this kata, your goal is to write a function which will reverse the vowels in 
// a string. Any characters which are not vowels should remain in their original 
// position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

function reverseVowels(str) {
  str = str.split("");
  let vowels = str.filter(a => a.match(/[aeiou]/gi));
  for(let i = str.length-1; i >= 0; i--){
    if(str[i].match(/[aeiou]/gi)){
      str[i] = vowels.shift();
    }
  }
  return str.join("");
}