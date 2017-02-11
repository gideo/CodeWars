// 6 kyu - Jumble Words

// Description:

// Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr 
// the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat 
// ltteer be at the rghit pclae. The rset can be a toatl mses and you can sitll raed 
// it wouthit porbelm. Tihs is bcuseae the huamn mnid deos not raed ervey lteter by 
// istlef, but the wrod as a wlohe.

// Interesting article about this.

// Task:

// Write a function which mix inner characters in each word,first and last character 
// stays untouched.Notice that punctuation mark is not a part of a word!By word we 
// define only alphanumeric characters.
// Requirements:

// -at least 10% of all changeable words must differ from original.
// If you solve this kata,check how many percent of changeable words you have changed.
// If you reach 100% you will get a reward!

function jumble(string) {
  return string.replace(/[a-z]+/gi, a => a.length > 1 ? a.charAt(0) + shuffle(a.split("").slice(1, a.length-1)) + a.charAt(a.length-1) : a )
}

function shuffle(array) {
  var currentIndex = array.length;
  while (0 !== currentIndex) {
    let tempValue, randIdx;
    randIdx = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randIdx];
    array[randIdx] = tempValue;
  }

  return array.join("");
}