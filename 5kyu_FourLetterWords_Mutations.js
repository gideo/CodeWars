// 5kyu - Four Letter Words ~ Mutations

// Our Setup
// Alice and Bob work in an office. When the workload is light and the boss isn't looking, they often play simple word games for fun. This is one of those days!

// This Game
// Today Alice and Bob are playing what they like to call Mutations, where they take turns trying to "think up" a new four-letter word identical to the prior word except for one letter. They just keep on going until their memories fail out.

// Their Words
// Alice and Bob have memories of the same size, each able to recall 10 to 2000 different four-letter words. Memory words and initial game word are randomly taken from a list of 4000 (unique, four-letter, lowercased) words, any of which may appear in both memories.

// The expression to "think up" a new word means that for their turn, the player must submit as their response word the first valid, unused word that appears in their memory (by lowest array index), as their memories are ordered from the most "memorable" words to the least.

// The Rules
// a valid response word must contain four different letters
// 1 letter is replaced while the other 3 stay in position
// it must be the lowest indexed valid word in their memory
// this word cannot have already been used during the game
// the final player to provide a valid word will win the game
// if 1st player fails 1st turn, 2nd can win with a valid word
// when both players fail the initial word, there is no winner
// Your Task
// To determine the winner!

// Some Examples
// alice = plat,rend,bear,soar,mare,pare,flap,neat,clan,pore

// bob = boar,clap,farm,lend,near,peat,pure,more,plan,soap

// In the case of word = "send" and first = 0:
// Alice responds to send with rend
// Bob responds to rend with lend
// Alice has no valid response to lend
// Bob wins the game.
// In the case of word = "flip" and first = 1:
// Bob has no valid response to flip
// Alice responds to flip with flap
// Alice wins the game.
// In the case of word = "maze" and first = 0:
// Alice responds to maze with mare
// Bob responds to mare with more
// Alice responds to more with pore
// Bob responds to pore with pure
// Alice responds to pure with pare
// Bob has no valid response to pare
// Alice wins the game.
// In the case of word = "calm" and first = 1:
// Bob has no valid response to calm
// Alice has no valid response to calm
// Neither wins the game.
// Input
// let alice;  //  array of words in Alice's memory (10 <= n <= 2000)
// let bob;    //  array of words in Bob's memory (same size as alice)
// let word;   //  string of the initial challenge word
// let first;  //  integer of whom begins: 0 for Alice, 1 for Bob
// Output
// return  0  //  if Alice wins
// return  1  //  if Bob wins
// return -1  //  if both fail
// Enjoy!
// If interested, you may choose from one of the following kata to solve next:

function mutations(alice, bob, word, turn) {
  let term = word, seen = new Set([ word ]);
  let arr = [ alice, bob ].map(p => p.filter(w => !/(.).*\1/.test(w)));
  const play = word => {
    for (let i = 0; i < arr[turn].length; i++) {
      if (seen.has(arr[turn][i])) {
        arr[turn].splice(i--, 1);
        continue;
      }
      let delta = 0;
      for (let j = 0; delta <= 1 && j < word.length; j++) 
        delta += word[j] !== arr[turn][i][j];
      if (delta === 1) {
        let res = arr[turn].splice(i, 1)[0];
        seen.add(res);
        return res;
      }
    }
  }
  while (term) {
    term = play(term);
    turn = 1 - turn;
  }
  return seen.size === 1 && !play(word) ? -1 : turn;
}