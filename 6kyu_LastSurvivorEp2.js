// 6kyu - Last Survivors Ep. 2

// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.
// If you like this kata, check out another one: Last Survivor Ep.3

function lastSurvivors(str) {
  let ch=str=>String.fromCharCode(str.charCodeAt(0)+1).replace("{","a"), r = /([a-z])(.*?)\1/;
  while (r.test(str)) str=str.replace(r,(a,b,c)=>ch(b)+c);
  return str;
}