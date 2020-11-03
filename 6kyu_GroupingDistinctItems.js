// 6kyu - Grouping Distinct Items 

// The goal of this exercise is to transform a flat array into one grouped by category. Each item in the array is an object with the following shape:

// const original = {
//   _distinctSeqID: number,
//   category: string,
//   ...otherThings
// }
// The goal at the end is to create an array of objects for each of the categories, where each object has the following shape:

// const final = {
//   distinctAttribute: string,
//   results: [
//     ...objects, // the complete original objects
//   ],
// }
// The array will be already sorted by category. This means that you might have one or multiple objects of the same category, but each category will only occur once, there won't be repetitions afterwards.

// The _distinctSeqID is an incrementing id starting at 0 for a new category, and then augmenting each time an object of the same category comes up.

// Lastly, note that the key "category" is customizable in the function. This is the key that is used for grouping, which your function doesn't need to handle. Just the fact that the attributeForDistinct will the the same as the key you want to have top-level as marker for looping over.

// If you enjoyed this kata, you can also check out groupBy

function distinctResults(results, attributeForDistinct) {
  let d = {};
  for (const e of results)
    d[e[attributeForDistinct]] = [...d[e[attributeForDistinct]] || [], e];
  return Object.entries(d).map(([k, v]) => ({distinctAttribute: k, results: v}))
}