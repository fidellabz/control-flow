import React from 'react';

function FizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

function FindLargest(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function CalculateGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function Assignment() {
  console.log("FizzBuzz for 1-50:");
  for (let i = 1; i <= 50; i++) {
    console.log(FizzBuzz(i));
  }

  const num1 = 10;
  const num2 = 25;
  const num3 = 15;
  const largest = FindLargest(num1, num2, num3);
  console.log(`Largest of ${num1}, ${num2}, and ${num3} is: ${largest}`);

  const testScore = 85;
  const grade = CalculateGrade(testScore);
  console.log(`Score of ${testScore} corresponds to grade: ${grade}`);

  return null; // Explicitly return null to avoid unnecessary JSX elements
}

export default Assignment;
