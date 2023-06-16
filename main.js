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
  operatorFunc(symbol) {
    switch (symbol) {
      case '+':
        return add(this.currentValue, this.nextValue);
      case '-':
        return subtract(this.currentValue, this.nextValue);
      case '*':
        return multiply(this.currentValue, this.nextValue);
      case '/':
        return divide(this.currentValue, this.nextValue);
      default: 
        return 'ERROR';
    }
  },

  operate(num1, operator, num2) {
    this.currentValue = num1;
    this.nextValue = num2;
    console.log(this.operatorFunc(operator));
  },

};