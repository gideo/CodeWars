// 6kyu - Classifying a Floating Point Number 

// The following table describes the different types of IEEE 754 numbers.

// It is valid for both single-precision (SP, 32 bits) and double-precision (DP, 64 bits).

// Type	Sign	Exponent	Mantissa
// Infinity	Any	All 1s	All 0s
// Quiet NaN	Any	All 1s	Starts with a 1
// Signaling NaN	Any	All 1s	Starts with a 0 and contains at least one 1
// Zero	Any	All 0s	All 0s
// Denormalized numbers	Any	All 0s	At least one 1
// Normalized numbers	Any	At least one 1 and one 0	Any
// An object FloatTypeEnum with properties enumerating these possible types has been preloaded for you. You must return the type of the Number received as parameter by returning the correct object property. In JavaScript, Numbers are encoded as IEEE 754 double precision (64 bits).

// Note
// You may want to solve this kata first :

// IEEE 754 floating point numbers

const FloatTypeEnum = Object.freeze({ // this object emulates an enum, which Javascript does not have
  POSITIVE_DENORMALIZED  : "POSITIVE_DENORMALIZED",
  NEGATIVE_DENORMALIZED  : "NEGATIVE_DENORMALIZED",
  POSITIVE_NORMALIZED    : "POSITIVE_NORMALIZED",
  NEGATIVE_NORMALIZED    : "NEGATIVE_NORMALIZED",
  POSITIVE_INFINITY      : "POSITIVE_INFINITY",
  NEGATIVE_INFINITY      : "NEGATIVE_INFINITY",
  POSITIVE_ZERO          : "POSITIVE_ZERO",
  NEGATIVE_ZERO          : "NEGATIVE_ZERO",
  POSITIVE_QUIET_NAN     : "POSITIVE_QUIET_NAN",
  NEGATIVE_QUIET_NAN     : "NEGATIVE_QUIET_NAN",
  POSITIVE_SIGNALING_NAN : "POSITIVE_SIGNALING_NAN",
  NEGATIVE_SIGNALING_NAN : "NEGATIVE_SIGNALING_NAN",
});

function getNumberType(number) {
  const buffer = new ArrayBuffer(8), view = new DataView(buffer);
  view.setFloat64(0, number);

  const u16 = view.getUint16(0), sign = u16 >> 15, exponent = (u16 >> 4) & 0x7FF;
  const mantisse = view.getBigUint64(0) & 0xFFFFFFFFFFFFFn;
  
  if (exponent == 0x7FF) {
    if (mantisse == 0n) {
      return (sign) ? FloatTypeEnum.NEGATIVE_INFINITY : FloatTypeEnum.POSITIVE_INFINITY;
    } else if (mantisse & 0x8000000000000n) {
       return (sign) ? FloatTypeEnum.NEGATIVE_QUIET_NAN : FloatTypeEnum.POSITIVE_QUIET_NAN;
    } else {
       return (sign) ? FloatTypeEnum.NEGATIVE_SIGNALING_NAN : FloatTypeEnum.POSITIVE_SIGNALING_NAN;
    }
  } 
  if (exponent == 0) {
    if (mantisse == 0n) {
      return (sign) ? FloatTypeEnum.NEGATIVE_ZERO : FloatTypeEnum.POSITIVE_ZERO;
    } else {
      return (sign) ? FloatTypeEnum.NEGATIVE_DENORMALIZED : FloatTypeEnum.POSITIVE_DENORMALIZED;
    }  
  } 
  return (sign) ? FloatTypeEnum.NEGATIVE_NORMALIZED : FloatTypeEnum.POSITIVE_NORMALIZED;
}