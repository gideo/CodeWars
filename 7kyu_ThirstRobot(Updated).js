// 7kyu - Thirsty Robot (Updated)

// The year is 2060, and Tim is a domestic robot within a UK household. He often hears the humans philosophising thus - "Beer before wine, you'll be fine; Wine before beer, oh dear." He needs your help in testing this logic for himself.

// You will be given an array of numbers, each value representing the alcoholic percentage of a certain drink. Using the following set of rules, write a function that can give an accurate outcome for the sequence of drinks.

// Drinks:

// Any value equal to or less than 8 represents beer / Beer <= 8

// Any value over 15 represents liquor / Liquor > 15

// Any other value (so, more than 8, but less than or equal to 15), represents wine / 8 < Wine <= 15

// Outcome:

// If wine does not precede beer, and there's no instance of liquor, return "Fine".

// If wine does not precede beer, but liquor IS present, return "Wonky robot".

// If wine DOES precede beer, but there is no instance of liquor, return "Oh dear".

// And if wine does precede beer, and liquor IS present, then return "Poor robot".

// Example:

//   let arr = [2.5, 4, 6, 8, 14]
//   thirstyRobot(arr) should return "Fine"

//   let arr = [2.5, 40, 6, 8, 14, 6]
//   thirstyRobot(arr) should return "Poor robot"
// Notes:

// Only positive numbers will be passed into the function.

function thirstyRobot(arr){
  let hadLiquor = false, hadWine = false, hadBeer = false, status = 'Fine'
  arr.forEach(n => {
    if (n > 15) {
      hadLiquor = true
      if (status === 'Oh dear')
        status = 'Poor robot';
      else if (status !== 'Poor robot')
        status = 'Wonky robot';
    } else if (n > 8) {
      hadWine = true;
    } else {
      hadBeer = true;
      if (hadWine) {
        if (status === 'Fine')
          status = 'Oh dear';
        else if (hadLiquor)
          status = 'Poor robot';
      }
    }
  });
  return status;
}