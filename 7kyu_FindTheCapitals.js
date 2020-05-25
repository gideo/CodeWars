// 7kyu - Find the Capitals 

// Write a method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings

// The method should return an array of sentences declaring the state or country and its capital.

// Examples

// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  });
}