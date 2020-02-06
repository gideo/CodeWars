// 6kyu - Card Game

// Lеt's create function to play cards. Our rules:

// We have the preloaded deck:

// deck = ['joker','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//                 '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//                 '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//                 '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠']
// We have 3 arguments:

// card1 and card2 - any card of our deck.

// trump - the main suit of four ('♣', '♦', '♥', '♠').

// If both cards have the same suit, the big one wins.

// If the cards have different suits (and no one has trump) return 'Let's play again.'

// If one card has trump unlike another, wins the first one.

// If both cards have trump, the big one wins.

// If card1 wins, return 'The first card won.' and vice versa.

// If the cards are equal, return 'Someone cheats.'

// A few games:

// ('3♣', 'Q♣', '♦') -> 'The second card won.'

// ('5♥', 'A♣', '♦') -> 'Let us play again.'

// ('8♠', '8♠', '♣') -> 'Someone cheats.'

// ('2♦', 'A♠', '♦') -> 'The first card won.'

// ('joker', 'joker', '♦') -> 'Someone cheats.'
// P.S. As a card you can also get the string 'joker' - it means this card always wins.

function cardGame(card1, card2, trump) {
    function compare(card1, card2, trump) {
        const allRanks = '2345678910JQKA';
        if ([card1, card2].includes('joker')) return (card1 === 'joker') - (card2 === 'joker');
        const suits = [card1.slice(-1), card2.slice(-1)];
        if (suits[0] === suits[1]) return allRanks.indexOf(card1[0]) - allRanks.indexOf(card2[0]);
        if (suits.includes(trump)) return (suits[0] === trump) - (suits[1] === trump);
        return 0;
    }
    if (card1 === card2)
        return 'Someone cheats.';
    let cmp = compare(card1, card2, trump);
    return (cmp === 0) ? 'Let us play again.' : `The ${(cmp > 0)? 'first': 'second'} card won.`;
}