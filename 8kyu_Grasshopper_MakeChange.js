// 8kyu - Grashopper Make Change

// Get change
// You go to the store and have a 10 dollar bill to spend. You buy candy, chips, and soda. Find out how much change you get back from the cashier.

// Item	Cost
// Candy	$1.42
// Chips	$2.40
// Soda	$1.00
// Create 5 variables and use the cost from the table above to set their values.

// money
// candy
// chips
// soda
// change

let money  = 10.00,
    candy  = 1.42,
    chips  = 2.40,
    soda   = 1.00,
    change = money - (candy + chips + soda);