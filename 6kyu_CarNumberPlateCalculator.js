// 6kyu - Car Number Plate Calculator 

// Introduction:
// The car registering system of a city N assigns two types of numbers:
// The Customer ID - a natural number between 0 and 17558423 inclusively, which is assigned to the car buyers in the following order: the first customer receives ID 0, the second customer receives ID 1, the third customer receives ID 2, and so on;

// Number Plate - assigned to the car and contains the series ( three Latin lowercase letters from a to z) and the serial number (three digits from 0 to 9).
// Example: aaa001. Each Number Plate is related to the given Customer ID. For example: Number Plate aaa001 is related to Customer ID 0; Number Plateaaa002 is related to Customer ID 1, and so on.

// Task:
// Write a function

// findTheNumberPlate
// which takes the Customer ID as an argument, calculates the Number Plate corresponding to this ID and returns it as a string, considering the following:

// The serial numbers start at 001, end at 999 and change in the following order: from aaa001 to aaa999. Some examples:

// aaa001, aaa002, aaa003, 
// ......, 
// aaa009, aaa010, aaa011, aaa012, 
// ......, 
// aaa019, aaa020, aaa021, 
// ......, 
// aaa099, aaa100, aaa101, aaa102, 
// ......, 
// aaa110, aaa111, aaa112, 
// ......, 
// aaa998, aaa999 
// The series change in the following order:
// The left letter changes first, alphabetically:

// aaa001...aaa999, 
// baa001...baa999,
// caa001...caa999, 
// ...... , 
// zaa001...zaa999
// As soon as the left letter reached z and the seriesz** has moved through all the serial numbers the middle letter changes alphabetically as follows:

// aba001...aba999, 
// bba001... bba999, 
// cba001...cba999, 
// ......, 
// zba001...zba999, 
// aca001...aca999, 
// bca001...bca999, 
// ......,
// zca001...zca999,
// ada001...ada999,
// ......,
// zda001...zda999, 
// ......, 
// zza001...zza999
// As soon as the middle letter and the left letter both reached z and the serieszz* has moved through all it's serial numbers the right letter changes alphabetically as follows:

// aab001...aab999, 
// bab001...bab999, 
// cab001...cab999, 
// ......, 
// zab001...zab999, 
// abb001...abb999, 
// bbb001...bbb999, 
// cbb001...cbb999, 
// ......,
// zbb001...zbb999, 
// acb001...acb999, 
// ......, 
// zzz001...zzz999
// 2.1 When all the possible series and their serial numbers are exhausted the last Number Plate will be zzz999.

// Remember!
// No spaces are allowed between the characters in the returned string. So 'abc123' is valid, but 'a b c 1 2 3' is not.

// If the serial number has less than 3 digits, the missing places should be replaced with zeroes.
// Example: serial number '12' should equal '012'; serial number '4' should equal '004'.

// Customer ID starts with 0.

// Good luck!

function findTheNumberPlate(id){
  let alph = 'abcdefghijklmnopqrstuvwxyz', number = id % 999 + 1 + '';
  let arr = Array(3).fill((id / 999)).map((i, ind) => alph[~~(i / 26 ** ind % 26)]).join('');
  return arr + number.padStart(3, '0')
}