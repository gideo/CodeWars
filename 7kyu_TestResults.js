// 7kyu - Test's Results

// It's important day today: the class has just had a math test. You will be 
// given a list of marks. Complete the function that will:

// Calculate the average mark of the whole class and round it to 3 decimal places.
// Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average 
// and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low 
// marks are 1 to 6.
// Return list [class_average, dictionary] if there are different type of marks, or 
// [class_average, dictionary, "They did well"] if there are only high marks.
// Examples
// [10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

// [5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

function testResult(array) {
  let stats = { h: 0, a: 0, l: 0 }, sum = 0;
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] > 8)
      stats.h += 1;
    else if (array[i] > 6)
      stats.a += 1;
    else
      stats.l += 1;
    sum += array[i];
  }
  let avg = Math.round(sum / array.length * 1000, 3) / 1000;
  return (stats.a || stats.l) ? [avg, stats] : [avg, stats, 'They did well'];
}