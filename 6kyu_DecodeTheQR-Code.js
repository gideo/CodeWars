// 6kyu - Decode the QR-Code 

// Translations appreciated

// Overview
// Your task is to decode a qr code. You get the qr code as 2 dimensional array, filled with numbers. 1 is for a black field and 0 for a white field. It is always a qr code of version 1 (21*21), it is always using mask 0 ((x+y)%2), it is always using byte mode and it always has error correction level H (up to 30%). The qr code won't be positioned wrong and there won't be any squares for positioning exept the three big ones in the corners.

// You should return the message inside the qr code as string.
// The QR Code will always be valid and be of version 1, meaning the decoded message will never be more than 8 characters long. The way to decode a complete QR-code is explained below, but keep in mind that in this kata, you'll only have to decode the parts in green in the picture below:

// dcode-image-v3-v2
// Input/ouput
// Input: 2D array of 0 (white) and 1 (black) values
// Output: the decoded message, according to the process described below.
// const qrcode = [[ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
//                 [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
//                 [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1 ],
//                 [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
//                 [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//                 [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1 ],
//                 [ 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1 ],
//                 [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1 ],
//                 [ 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//                 [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0 ],
//                 [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0 ],
//                 [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1 ],
//                 [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0 ],
//                 [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ],
//                 [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0 ],
//                 [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1 ]];
// return "Hello";

// Decoding a QR-code
// Here comes the explaination on how to decode a qr code. You can skip it, if you already know how it works:

// Postionning information
// First of all we have to take a look at the big three positioning fields in the corners.

// qrmatrixpkf2
// You can see on the image that these fields are connected.
// The fields are just there for the positioning and I told before that the qr code will be always positioned correctly so you can ignore them.

// Mask information
// The bits next to the positioning fields give us information about the mask and the error correction level the qr code uses. I wrote above that it is always mask 0 and always error correction level H, so we can also ignore that stuff.

// qrmatrixti2
// Reading information
// Now we start with the important stuff. Go through the qr code like the red arrow shows on this picture (btw I made it with paint so don't judge me)

// We start in the lower right corner
// Then we go one to the left
// Then we go one up and one to the right
// And so on just look the red arrow
// Important: Remember that everything inside the blue boxes has another purpose than encoding information, so don't forget to skip those parts.

// dcode-image-v3
// In the image below, you may find the complete pattern to read information in a QR-code. But keep in mind you'll be handling only "QR-code version 1", so you don't need to read the full set of data (see picture at the top if needed).

// 1920px-QR_Character_Placement.svg
// Decoding information
// We have to build a bit sequence now. In order to do that we will use mask 0 definition which is ((x+y)%2)==0, where:

// x and y are the indexes of our 2 dimensional array (0-based)
// if the condition of our mask is true, we have to convert the pixel: black -> 0 and white -> 1
// A mask is used to prevent long sequences of identical bits so that a scanner can better recognize the code
// For each black field add 1 to our bit sequence and for each white field add 0 to our bit sequence, don't forget that many bits get converted because of mask 0.

// Let's do the first bits together:

// We start with the first pixel (in the lower right corner, where also the red arrow begins) which is black, but we have to use mask because (20+20)%2 is 0, therefore we don't add 1 to our bit sequence but 0.
// Next field is white. This time we don't use mask because (20+19)%2 isn't 0, so we add a 0 to our bit sequence.
// Next field is black. This time we don't use mask because (19+20)%2 isn't 0, so we add a 1 to our bit sequence.
// Important (!): Since we're limiting ourselves to version 1, we have to continue that process only until our bit sequence is 76 long, because the input will never be longer than eight characters.

// At the end you get a bit sequence:

// bits:      0100000000100100100001101001000011101100000100011110110000010001111011001111
// legend:    MMMMssssssss...

// - "M": mode bits (4 bits)
// - "s": size message bits (8 bits)
// - ...: message bits and error correction information
// This bit sequence is representing the following information

// First 4 bits show mode: 0100. This isn't important for us, because I told you before that we will use always byte mode in this kata.
// The following 8 bits show the length of the encoded word: 00000010. This is the binary representation of number 2, so we know our word is 2 characters long.
// The following bits are data bits followed by error correction bits (but you can ignore error correction bits, because there won't be any errors). We know our word is 2 chars long, so we take the next 16 bits (because 1 char=8 bits):
// First group of 8 bits: 01001000. This is 72 in decimal which is ascii value of "H".
// Second group of 8 bits: 01101001. This is 105 in decimal which is ascii value of "i".
// Since we don't handle in this kata error correction, we got our word/output: "Hi".

function* ticTocGen(){
  let x=20, y=20, dx=-1;
  while(y>13){
    for(let dy=0;dy<2;dy++) yield [x,y-dy];
    x+=dx;
    if(x==8||x>20) { dx*=-1; y-=2; x=x==8?9:20; }
  }
}

function scanner(qrc){
  let arr=[];
  for(let [x,y] of ticTocGen()) arr.push(qrc[x][y] ^ ((x+y)%2==0));
  arr=arr.join('');
  let size=parseInt(arr.slice(4,12),2);
  return arr.slice(12, 12+size*8)
             .replace(/.{8}/g, m=>String.fromCharCode(parseInt(m,2)));
}