// 7kyu - No Oddities Here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values )

function noOdds(values){
  function isEven(number){
    return number%2 == 0;
  }
  return values.filter(isEven);
}