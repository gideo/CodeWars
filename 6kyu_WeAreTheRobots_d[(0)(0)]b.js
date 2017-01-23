// 6 kyu - We are the robots d[(0)(0)]b

// Description:

// ------------------------------------------------------------------
//  we are programmed just to do anything you want us to
//           w e  a r e  t h e  r o b o t s

// -----------------------------------------------------------[ d[(0)(0)]b]
// Task..... You will receieve an array of strings such as

// a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik 
// d[(0)(0)]b"]
// Count the robots represented by d[(0)(0)]b

// Unless of course the factory replaced a part on the robot.....

// d[(0)(0)]b could look a little different depending on the supplier maybe like this 
// d[(0)(0)]B or d[(0)(0}]B
// It's pretty random actually but with a global supply chain it's hard to control 
// which part you get. Most of the parts are made global except the ones made in the 
// factory which do not change.

// d[(0)(0)]B 

// In all robots the eyes do not change.

// d[(0)(0)]B 

// ...0..0...
//    ^  ^            
//    |  | 

// The rest of the body can change at random.

// legs any in => abcdefghijklmnopqrstuvwxyz
// ...0..0... 
// ^        ^             
// |        |

// body any in => |};&#[]/><()*


// ...0..0... 
//  ^^ ^^ ^^            
//  || || ||
// There may be cases where a part is totally missing and of course a robot cannot 
// function at all without a part or where the factory put a valid part in the wrong 
// place and it's again not a valid robot.

// return an array of strings with a count of each of the following tasks.

// Case insensitve count of robots in string with "automatik" or "mechanik". Strings 
// do not contain both "automatik and "mechanik".

// Return an array with the count like below

// a[0] = automatik count
// a[1] = mechanik count

// ["1 robots functioning automatik", "1 robots dancing mechanik"]
// to pay tribute...respect :)