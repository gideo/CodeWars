// 6kyu - Help Mrs Jefferson

// Mrs Jefferson is a great teacher. One of her strategies that helped her to reach astonishing results in the learning process is to have some fun with her students. At school, she wants to make an arrangement of her class to play a certain game with her pupils. For that, she needs to create the arrangement with the minimum amount of groups that have consecutive sizes.

// Let's see. She has 14 students. After trying a bit she could do the needed arrangement: [5, 4, 3, 2]

// one group of 5 students
// another group of 4 students
// then, another one of 3
// and finally, the smallest group of 2 students.
// As the game was a success, she was asked to help to the other classes to teach and show the game. That's why she desperately needs some help to make this required arrangements that make her spend a lot of time.

// To make things worse, she found out that there are some classes with some special number of students that is impossible to get that arrangement.

// Please, help this teacher!

// Your code will receive the number of students of the class. It should output the arrangement as an array with the consecutive sizes of the groups in decreasing order.

// For the special case that no arrangement of the required feature is possible the code should output [-1]

// The value of n is unknown and may be pretty high because some classes joined to to have fun with the game.

// You may see more example tests in the Example Tests Cases Box.

function shortestArrang(n) {
  if(n % 2 === 1) return [(n + 1) / 2, (n - 1) / 2];
  let min = n / 2 - 2, max = n / 2, sum = min + max + 1;
  while(true) {
    if(n === sum)break;
    if(sum > n) sum -= max--;
      else sum += min--;
    if(min < 0)return [-1];
  }  
  return Array.from(Array(max - min)).map((_, i) => max - i);
}