// 6kyu - Buying a Car

// A man has a rather old car being worth $2000. He saw a secondhand car being 
// worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of 
// the new one decrease of 1.5 percent per month. Furthermore the percent of loss 
// increases by a fixed 0.5 percent at the end of every two months.

// Can you help him? Our man finds it difficult to make all these calculations.

// How many months will it take him to save up enough money to buy the car he wants, 
// and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int, guaranteed) startPriceOld (Old car price)
// parameter (positive int, guaranteed) startPriceNew (New car price)
// parameter (positive int, guaranteed) savingperMonth 
// parameter (positive float or int, guaranteed) percentLossByMonth

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
// where 6 is the number of months at the end of which he can buy the new car and 
// 766 is the nearest integer to '766.158...' .

// Note: Selling, buying and saving are normally done at end of month. Calculations 
// are processed at the end of each considered month but if, by chance from the 
// start, the value of the old car is bigger than the value of the new one or equal 
// there is no saving to be made, no need to wait so he can at the beginning of the 
// month buy the new car:

// nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
// nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
// We don't take care of a deposit of savings in a bank:-)

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0, interest;
    while (startPriceOld  + (months * savingperMonth) < startPriceNew) {
        months++;
        interest = 1 - (percentLossByMonth + 0.5 * Math.floor(months/2))/100;
        [startPriceOld,  startPriceNew] = [startPriceOld * interest,  startPriceNew * interest]
        
    }
    return [months, Math.round((startPriceOld + months * savingperMonth) - startPriceNew)];
}