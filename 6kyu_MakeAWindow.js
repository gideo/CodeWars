// 6kyu - Make A Window 

// Make me a window. I'll give you a number (N). You return a window.

// Rules:

// The window will always be 2 x 2.

// The window needs to have N number of periods across and N number of periods vertically in each pane.

// Example:

// N = 3

// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------
// Note: there should be no trailing new line characters at the end.

function makeAWindow(num) {
    let row = "\n|"+('.'.repeat(num)+'|').repeat(2), grid = "-".repeat(row.length-1);
    for(i=0; i<num*2+1; i++){
        if(i === num)
            grid += "\n|"+"-".repeat(num)+"+"+"-".repeat(num)+'|';
        else
            grid += row;
    }
    grid += "\n"+"-".repeat(row.length-1);
    return grid;
}