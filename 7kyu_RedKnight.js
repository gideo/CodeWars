// 7kyu - Red Knight 

// Red Knight is chasing two pawns. Which pawn will be caught, and where?

// Input / Output
// Input will be two integers:

// N vertical position of Red Knight (0 or 1).
// P horizontal position of two pawns (between 2 and 1000000).
// Output has to be a tuple (python, haskell), an array (javascript), or a structure (C) with:

// "Black" or "White" - which pawn was caught
// Where it was caught (horizontal position)
// Example
// Input = 0, 4
// Output = ["White", 8]

// Notes
// Red Knight will always start at horizontal position 0.
// The black pawn will always be at the bottom (vertical position 1).
// The white pawn will always be at the top (vertical position 0).
// The pawns move first, and they move simultaneously.
// Red Knight moves 2 squares forward and 1 up or down.
// Pawns always move 1 square forward.
// Both pawns will start at the same horizontal position.

let redKnight = (N, P) => [((N+P)%2 ? 'Black' : 'White'), P*2];