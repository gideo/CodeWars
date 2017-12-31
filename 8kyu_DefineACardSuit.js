// 8kyu - Define a Card Suit

// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  let temp = "";
  switch(card.replace(/\w/gi, "")){
    case("♣"):
      temp = "clubs";
      break;
    case("♦"):
      temp = "diamonds";
      break;
    case("♥"):
      temp = "hearts";
      break;
    case("♠"):
      temp = "spades";
      break;
  }
  return temp;
}