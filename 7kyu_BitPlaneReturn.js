// 7kyu - Bit Plane Return

// A greyscale digital image is supplied as a matrix of values between 0 (black) and 
// 255 (white), each being the decimal representation of an 8-bit value. For example: 
// a mid-grey is represented as 127 in decimal and 01111111 in binary; the subsequent 
// value 128, is 10000000 in binary; an example of a 4 pixel digital image is: 
// [[0, 63], [127, 255]] in decimal, or [[00000000, 00111111], [01111111, 11111111]] 
// binary.

// Example of bit planes derived from 8-bit image

// A bit plane is a set of bits corresponding to a given bit position for each of the 
// binary values of an image matrix. For the 4 pixel example ([[0, 63], [127, 255]]) 
// above, bit plane 3 would be a matrix of values corresponding to the bit value at 
// index 5 for each value of the input matrix == [[0, 1], [1, 1]]. The binary value 
// index is mapped to the bit plane as follows:

// plane 0 => least significant bit / right-most bit == [7];

// plane 1 => [6] ... 6 => [1]... ;

// plane 7 => most significant bit / left-most bit == [0]

// The object of this kata is to return the specified bit plane (plane) for the 
// supplied image matrix(image). For this kata you will not be supplied an empty 
// matrix (there will always be at least one pixel) and the values within each array 
// will always be integers between 0 and 255. The value specified in plane will be 
// between 0 and 7 inclusive.


let bitSlice = (image, plane) => image.map(a => a.map(b => b >> plane & 1));