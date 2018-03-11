// 7kyu - Fast Cooking Pancakes

// You need to cook pancakes, but you are very hungry. As known, one needs to fry a 
// pancake one minute on each side. What is the minimum time you need to cook n 
// pancakes, if you can put on the frying pan only m pancakes at a time? n and m are 
// positive integers between 1 and 1000.

function cookPancakes(n, m) {
    return (m > n * 2 || n === 1) ? 2 : Math.ceil(n * 2 / m );
}