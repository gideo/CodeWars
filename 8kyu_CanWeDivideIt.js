// 8kyu - Can we divide it?

// Your task is to create functionisDivideBy (is_divide_by for C# and Python) to check 

// if an integer number is divisible by each out of two arguments.

// A few cases:

// isDivideBy(-12, 2, -6)  ->  true
// isDivideBy(-12, 2, -5)  ->  false

// isDivideBy(45, 1, 6)    ->  false
// isDivideBy(45, 5, 15)   ->  true

// isDivideBy(4, 1, 4)     ->  true
// isDivideBy(15, -5, 3)   ->  true


function isDivideBy(number, a, b) {
  return (number % a === 0 && number % b === 0)
}