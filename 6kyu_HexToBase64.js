// 6kyu - Hex to base64

// Convert hex-encoded string to base64

// Example:

// The string:

// 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d

// Should produce:

// SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

const hexToBase64 = hex => Buffer.from(hex,'hex').toString('base64');