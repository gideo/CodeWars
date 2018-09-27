// 7kyu - Points in Segments

// You are given a set of n segments on the axis Ox, each segment has integer endpoints between 0 and m inclusive.
//  Segments may intersect, overlap or even coincide with each other. Each segment is characterized by two integers li and ri — coordinates of the left and of the right endpoints.

//  Consider all integer points between 0 and m inclusive. Your task is to print all such points that don't belong to any segment. The point x belongs to the segment [l;r] if and only if l ≤ x ≤ r.

// Input:
//  m — the upper bound for coordinates;
//  array of coordinats li and ri 0 ≤ li ≤ ri ≤ m — the endpoints of the i-th segment. Segments may intersect, overlap or even coincide with each other.

// Output:
//  All points from 0 to m that don't belong to any segment.

// Examples:

// (5, [[2,2],[1,2],[5,5]]) => [0,3,4]
// (7, [[0,7]]) => []

function segments(m, a) {
  let arr = [];
  for (let i = 0; i <= m; i++)
    if (!a.find(([b, c]) => b <= i && i <= c)) arr.push(i);
  return arr;
}