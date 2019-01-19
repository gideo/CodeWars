// 8kyu - Closest Elevator

// Given 2 elevators (named 'right' and 'left') in a building with 3 floors (0, 1, 2),
// design a function that returns the elevator that's closest to the called floor.
// If both elevators are on the same level, return 'right'.

// You can assume that the inputs will always be valid integers between 0-2.

// For example,
// if 'left' is at the ground floor (0)
// and 'right' is at the 1st floor (1),
// a call from the 1st or 2nd floor should return 'right'
// while a call from the ground floor (0) should return 'left'.

// elevator(0, 1, 0); // returns 'left';
// elevator(0, 1, 1); // returns 'right';
// elevator(0, 1, 2); // returns 'right';

// If both elevators are on the same level, return 'right'.
// elevator(0, 0, 0); // returns 'right';

// If both elevators are equally distant from the call, return 'right'.
// elevator(0, 2, 1); // returns 'right';

let elevator = (left, right, call) => (Math.abs(call-left) < Math.abs(call-right)) ? 'left' : 'right';