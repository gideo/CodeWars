// 7kyu - Ranking Position

// In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

// For example: Input structure:

// [
//   {
//     name: "John",
//     points: 100,
//   },
//   {
//     name: "Bob",
//     points: 130,
//   },
//   {
//     name: "Mary",
//     points: 120,
//   },
//   {
//     name: "Kate",
//     points: 120,
//   },
// ]
// Output should be:

// [
//   {
//     name: "Bob",
//     points: 130,
//     position: 1,
//   },
//   {
//     name: "Kate",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "Mary",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "John",
//     points: 100,
//     position: 4,
//   },
// ]

function ranking(people) {
  people.sort((a, b) => {
     if(a.points == b.points)
       return a.name > b.name ? 1 : -1;
     else
       return b.points - a.points;
  });
  let pos = 1;
  people.map((val, index, arr) => {
    if(index == 0)
      val.position = pos++;
    else {
      if(val.points === arr[index-1].points) {
        val.position = arr[index-1].position;
        pos++;
      }
      else
        val.position = pos++;
    }
  });
  return people;
}