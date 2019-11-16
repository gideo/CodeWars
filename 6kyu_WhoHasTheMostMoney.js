// 6kyu - Who has the most money?

// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

function mostMoney(students) {  
  if(students.length == 1)
    return students[0].name;
  let most = ((students[0].fives * 5) + (students[0].tens * 10) + (students[0].twenties * 20)), equal = 1,
      newMoney = 0, studentName = students[0].name;
  for(let i = 1; i < students.length; i++){
    newMoney = ((students[i].fives * 5) + (students[i].tens * 10) + (students[i].twenties * 20));
    if(newMoney == most)
      equal++;
    if(newMoney >= most){
      most = newMoney;
      studentName = students[i].name;
    }
  }
  if(equal == students.length)
    return "all";
  return studentName;
}