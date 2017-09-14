// 8kyu - Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let m = (weight/Math.pow(height, 2))
  return (m <= 18.5) ? "Underweight" : (m > 18.5 && m <= 25) ? "Normal" : (m > 25 && m <= 30) ? "Overweight" : "Obese";
}