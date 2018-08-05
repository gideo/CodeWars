// 8kyu - Find Gravitational Force Between Two

// You job is to find the gravitational force between two sphereical 
// objects (obj1 , obj2).

// input
// Two arrays are give :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// no require (import) statements.

// value of G = 6.67 x 10-11N.kg–2.m2

// 1ft = 0.3048m

// 1lb = 0.453592kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution

let solution = (arr_val, arr_unit) => {
  let weight = { 'kg':1, 'g':1/1000, 'mg':1/1000000, 'μg':1/1000000000, 'lb':0.453592 }
  let distance={ 'm':1, 'cm':1/100, 'mm':1/1000, 'μm':1/1000000, 'ft':0.3048}
  const G=6.67*Math.pow(10,-11)
  return (G*arr_val[0]*weight[arr_unit[0]]*arr_val[1]*weight[arr_unit[1]])/Math.pow(arr_val[2]*distance[arr_unit[2]],2);
};