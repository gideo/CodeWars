// 7kyu - Cat Years, Dog Yearrs (2)

// This is related to my other Kata about cats and dogs.

// Kata Task
// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let ownedCatAndDog = (cat,dog) => [cat < 15 ? 0 : cat < 24 ? 1 : (cat - 16) / 4 | 0,
          dog < 15 ? 0 : dog < 24 ? 1 : (dog - 14) / 5 | 0];