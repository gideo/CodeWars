// 7kyu - ORing Arrays

// It started as a discussion with a friend, who didn't fully grasp some way of 
// setting defaults, but I thought the idea was cool enough for a beginner kata: 
// binary OR each matching element of two given arrays (or lists, if you do it 
// 	in Python; vectors in c++) of integers and give the resulting ORed array 
// [starts to sound like a tonguetwister, doesn't it?].

// If one array is shorter than the other, use the optional second parametero 
// (defaulted to 0) to OR the unmatched elements.

// For example:

// orArrays([1,2,3],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[4,5,6]) === [5,7,7]
// orArrays([1,2,3],[1,2]) === [1,2,3]
// orArrays([1,2],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[1,2,3],3) === [1,2,3]


let orArrays = (arr1, arr2, par=0) => arr2.length > arr1.length ? orArrays(arr2, arr1, par) : arr1.map((a,i)=>a|( i<arr2.length? arr2[i] : par))