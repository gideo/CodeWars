// 7kyu - Most Sales

// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// return the three product names with the highest revenue (amount * price).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

function top3(products, amounts, prices) {
    let rev = products.map((v, i) => prices[i] * amounts[i]), arr = [];
    for (let i = 0; i <3; i++) {
        arr.push(products[rev.indexOf(Math.max(...rev))]);
        rev[rev.indexOf(Math.max(...rev))] = -1;
    };
    return arr;
}