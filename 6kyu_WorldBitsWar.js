// 6 kyu - World Bits War

// Description:

// Variation of this nice kata, the war has expanded and become dirtier and meaner; 
// both even and odd numbers will fight with their pointy 1s. And negative integers 
// are coming into play as well, with, ça va sans dire, a negative contribution 
// (think of them as spies or saboteurs).

// Again, three possible outcomes: odds win, evens win and tie.

// Examples:

// bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
// bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
// bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2

let bitsWar = function(arr){
    let evens = arr.filter(a=>a%2===0)
                   .map(a=> (a === 0) ? 0 : (Math.abs(a) >>> 0).toString(2)
                   .match(/1/g).length * (a >= 0 ? 1 : -1))
                   .reduce((a, b) => a + b, 0),
        odds = arr.filter(a=>a%2!==0)
                  .map(a=> (Math.abs(a) >>> 0).toString(2)
                  .match(/1/g).length * (a >= 0 ? 1 : -1))
                  .reduce((a, b) => a + b, 0);
    return (evens === odds) ? "tie" : (evens > odds) ? "evens win" : "odds win";
}