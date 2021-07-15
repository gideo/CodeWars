// 6kyu - Racing #3: Emergency Stop

// This is a follow-up on Racing #2: Accelerated Drag Race. If you're having trouble, try that one first.

// Description
// It's a cold dusk in December, but that doesn't stop Anna and Bob from drag racing. Perhaps it should have... because suddenly, just as both of them had reached their top speed, a deer jumps on the track, right before Anna!

// ***scary music***

// Well, at least Anna worked on her reactions last kata. Will it be enough to avoid a nasty collision?

// In this kata, you will simulate the emergency stop by Anna, and determine the outcome of the confrontation with the deer. You will do this by implementing the function emergencyStop.

// Input
// You are given the distance between Anna and the deer.

// Also, you are given anna as a Car object, which has the following properties.

// speed        -> the current speed of the car in m/s
// reactionTime -> the reaction time of the driver in s
// deceleration -> the deceleration of the car in m/s2
// The speed speaks for itself: it is the speed with which the car is driving when the deer appears.

// The reaction time indicates how long it takes between the moment the deer jumps on the track, and the moment that Anna initiates the emergency stop. During this period of time, the car will maintain its current speed.

// The deceleration indicates how fast the car decreases its speed. A deceleration of 10m/s2 means that the car will drive 10m/s slower every second.

// For example, starting from a speed of 40m/s and a deceleration of 10m/s2, the car will drive:

// 39m/s after 0.1s
// 35m/s after half a second
// 20m/s after two seconds
// and so on...
// Be sure to check out the equations of motion for more information.

// Output
// Return one of the following four strings.

// If Anna stops 10m or further from the deer --> ```What was all the fuzz about?```
// If she stops between 0m and 10m from the deer --> ```Phew, that was close...```
// If she drives slower than 10m/s when she reaches the deer --> ```The deer jumps away in the nick of time!```
// If she drives 10m/s or faster when she reaches the deer --> ```An accident was unavoidable...```

function emergencyStop(deer, {speed, reactionTime, deceleration}) {
  let distance = deer - speed * reactionTime - (speed*speed)/(2*deceleration);
  if(distance >= 10) return 'What was all the fuzz about?';;
  if(distance > 0) return 'Phew, that was close...';
  let dist = deer - speed * reactionTime, col = Math.sqrt(speed*speed - 2*deceleration*dist);
  if(col < 10 ) return 'The deer jumps away in the nick of time!';
  return 'An accident was unavoidable...';
}