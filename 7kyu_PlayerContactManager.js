// 7kyu - Player Contact Manager

// You are the Dungeon Master for a public DnD game at your local comic shop 
// and recently you've had some trouble keeping your players' info neat and 
// organized so you've decided to write a bit of code to help keep them sorted!

// The goal of this code is to create an array of objects that stores a player's 
// name and contact number from a given string.

// The method should return an empty array if the argument passed is an empty 
// string or nil/None/null.

// Examples
// Have at thee!

function playerManager(players) {
  if (players == "" || !players) return [];
  let arr = players.split(", "), res = [];
  while (arr.length > 0)
    res.push({player: arr.shift(), contact: arr.shift()*1});
  return res;
}