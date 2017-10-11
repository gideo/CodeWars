// 6kyu - Treasure Box

// You found a treasure box with a note attached to it. To open the box you need to 
// find the number hidden in the note. Look at the note to crack the code! Answers 
// should return 0 if no other solution is found!

function findNum(x){
  const num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  x = x.toLowerCase().replace(/[^a-z]/gi, '');
  for(let i = 0; i <= 10; i++) {
    if (x.indexOf(num[i]) !== -1) {
      return i+1;
    }
  }
  return 0;
}