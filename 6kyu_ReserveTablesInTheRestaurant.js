// 6kyu - Reserve Tables in the Restaurant 

// Description:
// Your friend owns a busy restaurant and he asked you to help him figure out a way to manage table reservations. There are 10 tables in the restaurant (represented as objects):

// 4 tables for 2 people
// 2 tables for 3 people
// 2 tables for 4 people
// 1 table for 6 people
// 1 table for 8 people
// You need to write a function reserve that takes one argument:

// Input
// Bookings which is an array of integers representing all bookings for the same time. Each integer is a number of people for each booking. (example: [2, 4, 4] - one booking for 2 people, and two bookings for 4 people)

// Rules
// The restaurant has a set of rules about bookings:

// They don't reserve more than one table for any bookings.
// Therefore, they don't take bookings for more than 8 people.
// They can offer a bigger table for a booking but only if there will be just one spare seat left unoccupied at this table.
// The bookings are available on a first come first served basis.
// Output
// The function must return an array containing the names of tables that must be reserved and the list of the indexes of the bookings that weren't possible:

// [
//   ["table for two", "table for three", "table for three"],
//   "Bookings at the following indexes were not accepted: 0, 1, 4"
// }
// If all bookings are accepted, the second element is just an empty string.

function reserve(bookings) {
  let obj = {2:['two',4],3:['three',2],4:['four',2],6:['six',1],8:['eight',1]}, taken = [], arr = [];
  bookings.forEach((b,i)=>{
    if(obj[b] && obj[b][1]) {obj[b][1]--; taken.push(`table for ${obj[b][0]}`)}
    else if(obj[b+1] && obj[b+1][1]) {obj[b+1][1]--; taken.push(`table for ${obj[b+1][0]}`)}
    else arr.push(i)                
  })
  return arr.length ? [taken,'Bookings at the following indexes were not accepted: ' + arr.join(', ')] : [taken,'']
}