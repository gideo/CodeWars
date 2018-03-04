// 7kyu - Scrolling Text

// Let's create some scrolling text!

// Your task here is to write the function scrollingText, which takes a string, 
// and returns an array:

// scrollingText("codewars") should return

// ["CODEWARS",
// "ODEWARSC",
// "DEWARSCO",
// "EWARSCOD",
// "WARSCODE",
// "ARSCODEW"
// "RSCODEWA",
// "SCODEWAR"]
// Good luck!

function scrollingText(text){
  let arr = []; 
  text = text.toUpperCase();
  for( var i = 0; i < text.length; i++)
    arr.push((text.slice(i) + text.slice(0,i)))
  return arr;
}