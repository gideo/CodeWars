// 7kyu - Traffic Police Integers

// I recently got caught speeding by a mobile traffic unit. So, because I am not at all bitter, I want to prove that a mobile traffic unit will produce wildly inaccurate results. You're going to help me in this fight for justice!

// The Scenario
// A mobile traffic unit sets up speed traps by the side of the road to try to catch motorists speeding. A common way to measure the speed of motorists is to use a radar gun that essentially takes distance readings to the approaching car over time. For now, lets assume it only takes two readings:

// At time 1 (t1) the car is at a distance of d1 from the traffic officer
// At time 2 (t2) the car is at a distance of d2 from the traffic officer
// Based on an estimate of the distance between the officer and a point on the road (specifically, the point at which the car will be travelling perpendicular to the estimated distance) the officer (or the radar gun) is able to give a reading of the speed of the car.

// Traffic officers are lazy, so rather than getting out a tape measure they often just estimate this distance. Our first task is to work out whether the inaccuracy of this estimate has a large bearing on the speed reading.

// The inputs
// The following arguments will be passed to your function:

// est = the distance the officer estimates in meters
// act = the actual distance in meters if they had been bothered to measure it
// readings = an array with two sub-arrays representing the two readings that the radar gun will make. In each sub-array, the index 0 is the distance in meters measured by the radar gun and the index 1 is the time in seconds at which that reading was taken.
// Examples of the readings array:

// // In this example, the radar gun took a reading at 0 seconds (where the car was 50m away)
// // and a reading at 1 second (where the car was 30m away)
// var readings = [[50,0],[30,1];

// // In this example, the gun took a reading at 0.365 seconds (where the car was 25m away)
// // and a reading at 0.125 seconds (where the car was 30m away)
// // Note that your code should be able to handle the readings being passed to the function
// // in any order.
// var readings = [[25,0.365],[30,0.125]];
// Input validation
// The only input you need to validate is the distance element of the readings sub-arrays (at index 0 of each sub-array). If this is zero (I didn't run over the traffic officer) or negative (the gun has to point at the target), throw an error.

// You are otherwise safe to assume that you will be passed the correct number of arguments, that the readings array will be a 2x2 array and that all inputs will be valid numbers.

// Outputs
// You are expected to output an array in the format [estSpeed,actSpeed] where estSpeed is the speed that the traffic officer will estimate I was travelling at and actSpeed is the speed I was actually travelling.

// Both speeds should be in kilometers per hour and to an accuracy of one decimal place.

// For example [72.9,72.2] is a valid output.

// Spoiler Alert: Further Katas
// You will see from your results that the inaccuracies that arise as a result of the officers estimating the distance to the road are not significant. But this is the first in a series of katas where we will explore the possible inaccuracies of a mobile traffic unit. Stay tuned for more!

var speedError = function(est, act, readings) {
  if ( readings[0][0] < 1 || readings[1][0] < 1 ) throw Error('Invalid reading');
  if ( readings[0][1] > readings[1][1] ) readings.reverse();
  let d1 = readings[0][0], d2 = readings[1][0], t = readings[1][1] - readings[0][1];
  function speed(c){
    let a = Math.sqrt(Math.abs(Math.pow(d1,2) - Math.pow(c,2))),
        b = Math.sqrt(Math.abs(Math.pow(d2,2) - Math.pow(c,2))),
        speed = ((a - b) / t) * 3.6;  
    return Math.abs(Math.round( speed * 1e1 ) / 1e1);
  }
  return [speed(est), speed(act)];
}