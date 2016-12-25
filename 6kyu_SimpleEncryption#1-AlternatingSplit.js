// 6 kyu - Simple Encryption #1 - Alternating Split
// Description:

// For building the encrypted string:
// Take every 2nd char from the string. Then the other chars.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

let encrypt = function(text, n) {
  let str;
  if(!text) { return text;}
  for(let i = 0; i < n; i+=1) {
    str = text.split('').filter((_,i) => (i%2===0)).join('');
    text = text.split('').filter((_,i) => (i%2===1)).join('') + str;
  }
  return text;
}

function decrypt(eText, n) {
  if(!eText) { return eText; }
  let str, temp;
  let len = ~~(eText.length/2);
  for(let i = 0; i < n; i+=1){
    temp = "";
    str = eText.substr(len);
    eText = eText.substr(0, len);
    for(let j = 0; j < eText.length; j++){
      temp += str[j] + eText[j];
    }
    if(str.length > eText.length)
      temp += str[str.length-1];
    eText = temp;
  }
  return eText;
}