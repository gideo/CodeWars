// 7kyu - Selective Fear of Numbers

// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisable by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)

let AmIAfraid = function(day, num) {
  switch (day.slice(0, 2)) {
    case 'Mo':
      return num === 12;
    case 'Tu':
      return num > 95;
    case 'We':
      return num === 34;
    case 'Th':
      return num === 0;
    case 'Fr':
      return !(num % 2);
    case 'Sa':
      return num === 56;
    case 'Su':
      return Math.abs(num) === 666;  
  }
}