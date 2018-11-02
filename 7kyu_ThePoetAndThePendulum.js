// 7kyu - The Poet and The Pendulum
// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum

// Beautiful musical notes are the Numbers  !alt !alt

// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

function pendulum(a) {
  let list = [], arr = [];
  a.sort((b, c) => b - c).forEach((e, i) => (i % 2 ? arr : list).push(e));
  return list.reverse().concat(arr);
}