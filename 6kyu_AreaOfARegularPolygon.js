// 6kyu - Area of a regular polygon

// Create a function for calculating the area of a regular polygon. The function 
// takes one input parameter: a string containing the number of sides and the 
// length of each side, such as "4 sides of 5 cm each". It returns another string 
// containing the area of the polygon with the right units, such as "25.00 sq.cm". 
// The anwer should be rounded to two digits after the decimal point. If the input 
// string has a wrong format, the function returns "Invalid input".

function areaOfRegularPolygon(s) {
    let match = s.match(/^(\d+) sides of (\d+(?:\.\d+)?) (\w+) each$/);
    if(!match || match[1] < 3) return 'Invalid input';
    let [sides, len, unit] = match.splice(1, 4)
    let area = Math.pow(len, 2) * sides / (4 * Math.tan(Math.PI / sides));
    return area.toFixed(2) + ' sq.' + unit;
}