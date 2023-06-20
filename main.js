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
  operator: '',
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

  // Function to perform one full operation
  operate(num1, operator, num2) {
    this.currentValue = num1;
    this.nextValue = num2;
    return this.operatorFunc(operator);
  },

};

// Link number buttons to populate the calculator display
const numberButtons = document.getElementById('numbers');
const displayText = document.getElementById('display-text');

for (const button of numberButtons.children) {
  button.addEventListener('click', () => {
    let num = button.textContent;
    // Override display if it's already stored
    if (displayText.textContent == calculator.currentValue) {
      clearScreen();
      displayText.textContent = num;
    } else {
      displayText.textContent += num;
    }
  });
}

// Initialize the currentValue and screen display
displayText.textContent = calculator.currentValue;

// Add functionality to the CLEAR button
function clearScreen() {
  displayText.textContent = '0';
}

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
  calculator.currentValue = '0';
  clearScreen();
});

// Add functionality for the operator buttons
const operatorButtons = document.getElementsByClassName('operator');
for (const button of operatorButtons) {
  button.addEventListener('click', () => {
    if (calculator.operator !== '') {
      equals();
    } else {
      calculator.currentValue = displayText.textContent;
    }

    switch (button.textContent) {
      case '+':
        calculator.operator = '+';
        break;
      case '-':
        calculator.operator = '-';
        break;
      case 'x':
        calculator.operator = '*';
        break;
      case '÷':
        calculator.operator = '/';
        break;
      default:
        calculator.operator = 'ERROR'
        break;
    }
  });
}

// Separate function for calculating & displaying
function equals() {
  calculator.nextValue = displayText.textContent;
  displayText.textContent = calculator.operate(calculator.currentValue, calculator.operator, calculator.nextValue);
  calculator.currentValue = displayText.textContent;
  calculator.nextValue = '0';
  calculator.operator = '';
}

// Add functionality for the equals button
const equalsButton = document.getElementById('btn-equals');
equalsButton.addEventListener('click', equals);