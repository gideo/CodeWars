// 7kyu - Card Games: Twenty-One

// You have three input arguments -> actually cards -> actually strings :)

// Let's play the game 'Twenty-one' creating a function that returns:

// 'twenty-one' ---> if the sum of cards equals 21
// 'more' ---> if the sum of cards more than 21
// 'less' ---> if the sum of cards less than 21
// One nuance - we have lost spades cards of our deck and now it look like 
// (preloaded as deck) that:

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
// A few games:

// ('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
// ('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
// ('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
// Some details:

// the result does not depend on suit
// ace can be only 11 points
// points of J,Q,K are 2,3,4
// More details here: https://en.wikipedia.org/wiki/Blackjack

function twentyOne(...cards) {
  let letters = {"A": 11, "J": 2, "Q" : 3, "K": 4}
  cards = cards.map(a => a.replace(/\W/gi, "")).map(b => /[AJQK]/i.test(b) ? letters[b] : b).reduce((a,b) => +(a) + +(b));
  return cards < 21 ? "less" : cards === 21 ? "twenty-one" : "more";
}