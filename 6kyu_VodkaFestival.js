// 6 kyu - Vodka Festival

// Description:

// Can you calculate total amount of vodka that Vodka God have drank on his festival?
// Unfortunately Vodka God drank from various goblets with different capacities.

// Task:

// Write function which accepts an array of drank amounts from various cups and 
// calculate total amount of vodka drunk by god.Result must be rounded to nearest 
// one and can be return both in literes or mililitres.
// Function input:

// -There will be only 2 types of units litres and mililitres.
// -Array will never be empty(hey its festival).
// //capacity format:
// //-number can be a float.
// //-only small letters.
// var shots = ["500ml","2l","1.4l"];

// //output must be in same format.
// vodkaConsumption(shots) //must return "3900ml" or "4l"

let vodkaConsumption = function(shots){
    let ml = shots.filter(a=> /ml/.test(a)).map(a=>+a.replace(/[a-z]/gi, ""));
    let liter = shots.filter(a => !/ml/.test(a)).map(a=>+a.replace(/[a-z]/gi, "") * 1000);
    return ml.concat(liter).reduce((a,b)=> a+b) + "ml";
}