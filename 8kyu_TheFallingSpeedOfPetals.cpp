8kyu - The Falling Speeds of Petals

/*
When it's spring Japanese cherries blossom. And their petals fall in late April. 
Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), 
and it takes 80 seconds for the petal to reach the ground from a certain tree. 
Write a function that reads the velocity (cm/s) and returns the time from that 
tree to the ground.

! The movement of the petal is quite compilcated, so in this case we can see the 
velocity as a constant during its falling.

! Pay attention to the data types.

! If the initial velocity is non-positive, the return value should be 0.
*/

double SakuraFall(double v) {
     return (v > 0) ? 400/v : 0;
}