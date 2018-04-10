// 7kyu - Harry and the Mathematician's Chicken

// Harry's local chicken shop - The Golden Chick - sells chicken 
// pieces in boxes of 3, 6 and 10.

// Write a function that takes the total number of chicken pieces Harry can eat 
// (n) and returns an array of the possible numbers of chicken pieces he can buy, 
// that are less than or equal to n.

// 0 chicken pieces is a valid chicken option.

// For example:

// chickenOptions(9)
// should return [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, 
// or a box of 3 and a box of 6 (9 in total).

// For non-numeric input, the function should return [0].

function chickenOptions(n) {
  if (typeof n != 'number') return [0];
  let ex = new Set([1, 2, 4, 5, 7, 8, 11, 14, 17]), arr = [];
  return Array.from({length: n + 1}, (a, i) => i).filter(x => !ex.has(x));
}