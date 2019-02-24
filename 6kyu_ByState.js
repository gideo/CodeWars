// 6kyu - ByState
// Given a string with friends to visit in different states:

// ad3="John Daggett, 341 King Road, Plymouth MA
// Alice Ford, 22 East Broadway, Richmond VA
// Sal Carpenter, 73 6th Street, Boston MA"
// we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

// Massachusetts
// .....^John Daggett 341 King Road Plymouth Massachusetts
// .....^Sal Carpenter 73 6th Street Boston Massachusetts
// ^Virginia
// .....^Alice Ford 22 East Broadway Richmond Virginia
// Spaces not being always well seen, in the above result ^ means a white space.

// Not printed, the resulting string will be:

// "Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
// Notes
// There can be a blank last line in the given string of adresses.
// The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
// You can see another example in the "Sample tests".
// States
// For the lazy ones:

// 'AZ': 'Arizona',
// 'CA': 'California',
// 'ID': 'Idaho',
// 'IN': 'Indiana',
// 'MA': 'Massachusetts',
// 'OK': 'Oklahoma',
// 'PA': 'Pennsylvania',
// 'VA': 'Virginia'

function byState(str) {
  const states = {
    CA: 'California',
    MA: 'Massachusetts',
    OK: 'Oklahoma',
    PA: 'Pennsylvania',
    VA: 'Virginia',
    AZ: 'Arizona',
    ID: 'Idaho',
    IN: 'Indiana'
  }
  
  let lines = str.trim().split('\n').map(function (x) {
    x = x.split(', ');
    let last = x.pop().split(' '), state = states[last.pop()];
    return [x.concat(last).join(' '), state]
  }).sort((a,b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]))
  let result = [], lastState = ''
  lines.forEach(x => {
    if (lastState != x[1]) {
      result.push(' ' + x[1]);
      lastState = x[1];
    }
    result.push('..... ' + x.join(' '));
  })
  return result.join('\r\n').trim();
}