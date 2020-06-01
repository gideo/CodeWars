// 6kyu - Basic Physics Problems - Space -Kinematics

// Two moving objects A and B are moving accross the same orbit (those can be anything: two planets, two satellites, two spaceships,two flying saucers, or spiderman with batman if you prefer). If the two objects start to move from the same point and the orbit is circular, write a function that gives the time the two objects will meet again, given the time the objects A and B need to go through a full orbit, Ta and Tb respectively, and the radius of the orbit r. As there can't be negative time, the sign of Ta and Tb, is an indication of the direction in which the object moving: positive for clockwise and negative for anti-clockwise.

// The function will return a string that gives the time, in two decimal points. Ta and Tb will have the same unit of measurement so you should not expect it in the solution.

// Hint: Use angular velocity "w" rather than the classical "u".

let meetingTime = (Ta, Tb, r) => Math.abs((!Ta || !Tb) ? (Ta || Tb) : Ta*Tb/(Ta-Tb)).toFixed(2);