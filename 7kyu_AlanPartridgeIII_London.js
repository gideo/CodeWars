// 7kyu - Alan Partridge III - London

// Ever the learned traveller, Alan Partridge has pretty strong views on London:

// "Go to London. I guarantee you'll either be mugged or not appreciated.
// Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
// Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

// ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
// If the stations all appear, return 'Smell my cheese you mother!', if not, return 'No, seriously, run. You will miss it. '.

let alan = x => ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(e => x.indexOf(e) != -1) 
  ? 'Smell my cheese you mother!' 
  : 'No, seriously, run. You will miss it.';  