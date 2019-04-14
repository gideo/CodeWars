// 6kyu - Triangle Waveform

// Introduction

// The simple triangle waveform is used in electronics, digital signal processing and audio synthesis.

// There are many interactive programming environments available which allow you to generate waveforms like this at a given frequency (i.e. the number of cycles per second) and amplitude (which determines the range of peaks and troughs of the waveform), as well as the ability to offset the waveform so that it starts from a different position in its cycle.

// In the digital world, these waveforms are expressed as bits and samples, which can be later converted to analog signals used to propel air through speaker cones.

// Task
// Your challenge is to create a function which outputs a simple visual representation of a triangle waveform.

// You will create a function which takes three arguments;

// Length of waveform - This will determine how many samples are displayed in the visualization. And could be a value from 4 to 50 samples.

// Depth of waveform - This will determine both the amplitude and frequency of the triangle waveform (you'll see why in a minute). This will be a value between 2 and 20.

// Offset - This will determine the starting position of the waveform. Generally this will between 0 and and the depth value, though it may be higher (it won't be a negative number). If the offset value is 0, the waveform will start from the bottom right.

// Output
// The function will output a visualization of the waveform, represented as a string with newline characters to seperate lines. Asterisks * will be to represent signal values, and spaces will be used for padding on all other non-signal values.

// Check out these examples of how it'll look ;

// triangleWave(20,6,0) will output this...

//      *         *    
//     * *       * *   
//    *   *     *   *  
//   *     *   *     * 
//  *       * *       *
// *         *         
// It is 20 samples in length, has a depth of 6, and no offset.

// triangleWave(22,4,1) will output this...

//   *     *     *     * 
//  * *   * *   * *   * *
// *   * *   * *   * *   
//      *     *     *    
// triangleWave(30,10,5) will output this...

//     *                 *       
//    * *               * *      
//   *   *             *   *     
//  *     *           *     *    
// *       *         *       *   
//          *       *         *  
//           *     *           * 
//            *   *             *
//             * *               
//              *                
// Good Luck!

function triangleWave(length,depth,offset) {
  let arr = [], periodLength = (depth * 2) - 2;
  for (let i=0; i<depth; ++i) {
    let line = '';
    for (let j=0 + offset; j<length + offset; ++j) {
      let period = parseInt(j/periodLength), 
          left = depth - 1 - i, 
          right = depth - 1 + i, 
          pt = j - (periodLength * period);
      line += [left, right].includes(pt) ? '*' : ' ';
    }
    arr.push(line);
  }
  return arr.join('\n');
}