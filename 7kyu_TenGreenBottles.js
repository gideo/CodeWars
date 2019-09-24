// 7kyu - Ten Green Bottles

// Who knows the nursery rhyme Ten Green Bottles?

// Lyrics:

// Ten green bottles hanging on the wall,
// Ten green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be nine green bottles hanging on the wall.

// Nine green bottles hanging on the wall,
// Nine green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be eight green bottles hanging on the wall. 

// Eight green bottles hanging on the wall...
// Seven green bottles hanging on the wall...
// ...

// One green bottle hanging on the wall,
// One green bottle hanging on the wall,
// If that one green bottle should accidentally fall,
// There'll be no green bottles hanging on the wall.
// Task
// Write some amazing code to reproduce the above lyrics starting from n green bottles!

// parameter n is 1 to 10
// newline terminates every line (including the last)
// don't forget the blank lines between the verses

function tenGreenBottles(n) {
  let arr = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'], res = '';
  while (n > 0) {
    res += arr[n] + " green " + (n === 1 ? "bottle" : "bottles") + " hanging on the wall,\n"+
    arr[n] + " green " + (n === 1 ? "bottle" : "bottles") + " hanging on the wall,\n"+
    (n === 1 ? "If that" : "And if") + " one green bottle should accidentally fall,\n"+
    "There'll be " + (n === 2 ? "one green bottle" : arr[n-1].toLowerCase() +" green bottles" ) + " hanging on the wall.\n"+
    (n === 1 ? "" : "\n")
    n--;
  }
  return res;
}  