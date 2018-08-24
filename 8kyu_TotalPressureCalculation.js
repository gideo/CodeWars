// 8kyu - Total Pressure Calcuation

// Given the moleculer mass of two molecules ( M1 and M2 ), their 
// masses present ( m1 and m2 ) in a vessel of volume ( V ) at a 
// specific temperature ( T ). Find the total pressure exerted by the 
// molecules ( Ptotal ) .

// input
// Six values :

// m1
// m2
// M1
// M2
// V
// T
// output
// One value :

// Ptotal
// notes
// Units for each of the following are given as under :

// m1 = gram
// m2 = gram
// M1 = gram.mole-1
// M2 = gram.mole-1
// V = dm3
// T = Celcius
// Ptotal = atmpspheric pressure (atm)
// Remember : Temperature is given in Celcius while SI unit is Kelvin (K)

// 0 Celcius = 273.15Kelvin

// The gas constant (R) has value of 0.082dm3.atm.K-1.mol-1

solution= (M1, M2, m1, m2, V, t) => {
  const T = t + 273.15
  return ((m1 / M1) + (m2 / M2)) * (0.082 * T) / V;
}