// 6kyu - Architect's Dream: Drawing Curves, Observing, Thinking

// An architect wants to construct a vaulted building supported by a family of arches Cn.

// fn(x) = -nx - xlog(x) is the equation of the arch Cn where x is a positive real number (0 < x <= 1), log(x) is the natural logarithm (base e), n a non negative integer. Let fn(0) = 0.

// Be An the point of Cn where the tangent to Cn is horizontal and Bn+1 the orthogonal projection of An on the x-axis (it means that An and Bn+1 have the same x -coordinate). Kn is the intersection of Cn with the x-axis.

// The figure shows C0, A0, B1, K0 as C(0), A0, B1, K0.

// alternative text

// The architect wants to support each arch Cn with a wall of glass filling the curved surface An Bn+1 Kn under the curve Cn. On the drawing you can see the surface A0 B1 K0 in blue.

// He asks if we could calculate the weight of the surface of glass he needs to support all arches C0...Cn where n is a positive integer knowing he can choose glass thickness hence glass weight per square unit of surface.

// He gives us the absolute value of A0 B1 K0 area (in blue); call it i0 which is approximately 0.14849853757254047 in square units.

// Task
// Write the function weight with parameters n and w where n is the number of arches to consider (n >= 1) and w is the weight of a square unit of glass depending on the wall thickness.

// This function should return the weight of n glass walls as described above.

// Example
// weight(10, 700) -> 120.21882500408238
// weight(8, 1108) -> 190.28922301858418
// Hint:
// There is no integral to calculate. You can plot C1 and try to see the relationship between the different Cn and then use i0.

let weight = (n, w) => w * (Math.exp(2) - 3) * (1 - Math.exp(-2*n))/(4 * (Math.exp(2) - 1));