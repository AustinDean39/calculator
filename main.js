// Basic calculation functions:
// Add two numbers
function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

// Subtract two numbers
function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

// Multiply two numbers
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

// Divide two numbers
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

// Calculator object
const calculator = {
  currentValue: 0,
  nextValue: 0,
  operator: {
    '+': add(currentValue, nextValue),
    '-': subtract(currentValue, nextValue),
    '*': multiply(currentValue, nextValue),
    '/': divide(currentValue, nextValue),
  },

}