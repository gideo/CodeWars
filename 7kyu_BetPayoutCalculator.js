// 7kyu - Bet Payout Calculator
// You are in charge of handling a series of bets based on coin flips, write a script that accepts the following params:

// probHeads: an array containing the win multiplier for Heads and the ammount of money currently on Heads

// probTails: an array containing the win multiplier for Tails and the ammount of money currently on Tails

// outcome: a string, either "Heads" or "Tails" that represents the winning bet

// and return the proper string out of these 3:

// "The outcome is [X], In total I have to pay [Y]$ to the winner, I broke even!"
// "The outcome is [X], In total I have to pay [Y]$ to the winner, of which [Z]$ from my own pockets :("
// "The outcome is [X], In total I have to pay [Y]$ to the winner, I have pocketed [Z]$ !"
// you pocket all the money in the losing side of the bet, but have to pay out all the money in the winning side multiplied by the multiplier.

// All numbers should be printed with 2 decimal values, for example:

// 10.00$
// 5.35$
// 945.10$

function calculatePayout(betHeads, betTails, outcome) {
  let payout  = 0, keep = 0;
  switch (outcome) {
    case 'Tails' : payout = betTails[0] * betTails[1]; 
                   keep = betHeads[1]; break;
    case 'Heads' : payout = betHeads[0] * betHeads[1]; 
                  keep = betTails[1]; break;
  }
  let ps = parseFloat(Math.round(payout * 100) / 100).toFixed(2),
      gs = parseFloat(Math.abs(Math.round((keep - payout) * 100) / 100)).toFixed(2);
  
  let s = `The outcome is ${outcome}, In total I have to pay ${ps}$ to the winner, `  
  if (keep - payout < 0) return s + `of which ${gs}$ from my own pockets :(`
  if (keep - payout > 0) return s + `I have pocketed ${gs}$ !` 
  
  return s + 'I broke even!';
}