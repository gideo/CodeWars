// 6kyu - Braking Well

// Braking distance d1 is the distance a vehicle will go from the point when it brakes to when it comes to a complete stop. It depends on the original speed v and on the coefficient of friction mu between the tires and the road surface.

// The braking distance is one of two principal components of the total stopping distance. The other component is the reaction distance, which is the product of the speed and the perception-reaction time of the driver.

// The kinetic energy E is 0.5*m*v**2, the work W given by braking is mu*m*g*d1. Equalling E and W gives the braking distance: d1 = v*v / 2*mu*g where g is the gravity of Earth and m the vehicle's mass.

// We have v in km per hour, g as 9.81 m/s/s and in the following we suppose that the reaction time is constant and equal to 1 s. The coefficient mu is dimensionless.

// There are two tasks.

// The first one is to calculate the total stopping distance in meters given v, mu (and the reaction time t = 1).

// dist(v, mu) -> d = total stopping distance

// The second task is to calculate v in km per hour knowing d in meters and mu with the supposition that the reaction time is still t = 1.

// speed(d, mu) -> v such that dist(v, mu) = d.

// #Examples:

// dist(100, 0.7) -> 83.9598760937531

// speed(83.9598760937531, 0.7) -> 100.0

// #Notes:

// Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
// Don't forget the reaction time t: t = 1
// Don't truncate or round your results. See in "RUN SAMPLE TESTS" the function assertFuzzyEquals or dotest-....
// Shell: only dist is tested.

function dist(v, mu) {
    let g = 9.81, coef = 1000.0 / 3600.0, dreact = v * coef, vms = coef * v, dbrak = 0.5 * Math.pow(vms, 2) / mu / g;  
    return dreact + dbrak;
}

function speed(d, mu) {
    let g = 9.81;
    let coef = 3600 / 1000.0;
    return 0.5 * mu * g * (- 2 + Math.sqrt(4 + 8*d/mu/g)) * coef;
}