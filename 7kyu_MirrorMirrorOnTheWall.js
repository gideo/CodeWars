// 7kyu - Mirror, Mirror, on the Wall...

// Too long, didn't read
// You get a list of integers, and you have to write a function mirror that returns the 'mirrored' (or symmetric) version of this list, i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest, and so on...

// More info
// The list will always consist of integers in range < -1000, 1000 > and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested ( where applicable ). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

// Examples:

// mirror([]) == []
// mirror([1]) == [1]
// mirror([2, 1]) == [1, 2, 1]
// mirror([1, 3, 2]) == [1, 2, 3, 2, 1]
// mirror([-8, 42, 18, 0, -16]) == [-16, -8, 0, 18, 42, 18, 0, -8, -16]
// Good luck!

function mirror(data) {
  let sorted = data.slice().sort((a,b) => a-b);
  return [...sorted, ...sorted.reverse().slice(1)];
}