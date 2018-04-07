// 7kyu - Multiply Characters

// Here we have a function that help us spam our hearty laughter. 
// But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

function spam(number){
  return Array(number).fill("hue").join('');
}