'use strict';

const clearEl = document.querySelector('[data-clear]');
const deleteEl = document.querySelector('[data-delete]');
const equalEl = document.querySelector('[data-equal]');
const numbersEl = document.querySelectorAll('[data-number]');
const operatorElNode = document.querySelectorAll('[data-operator]');
const previousNumElText = document.querySelector('[data-previous-number]');
const currentNumElText = document.querySelector('[data-current-number]');

class Calculator {
  constructor(previousNumElText, currentNumElText) {
    this.previousNumElText = previousNumElText;
    this.currentNumElText = currentNumElText;
    this.clear();
  }

  clear() {
    this.previousNumEl = '';
    this.currentNumEl = '';
    this.operator = undefined;
  }

  delete() {
    this.currentNumEl = this.currentNumEl.toString().slice(0, -1);
  }

  appendNumber(number) {
    // If there is a decimal already or we pressed a decimal then dont;'t do anything

    if (number === '.' && this.currentNumEl.includes('.')) return;
    this.currentNumEl = this.currentNumEl.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentNumEl === '') return;
    if (this.previousNumEl !== '') {
      this.compute();
    }
    this.operator = operator;
    this.previousNumEl = this.currentNumEl;
    this.currentNumEl = '';
  }

  compute() {
    let computation;
    const prev = +this.previousNumEl;
    const curr = +this.currentNumEl;

    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.operator) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '÷':
        computation = prev / curr;
        break;
      default:
        return;
    }
    this.currentNumEl = computation;
    this.operator = undefined;
    this.previousNumEl = '';
  }

  updateDisplay() {
    this.currentNumElText.innerText = this.currentNumEl;
    if (this.operator != null) {
      this.previousNumElText.innerText = `${this.previousNumEl} ${this.operator}`;
    } else {
      this.previousNumElText.innerText = '';
    }
  }
}

const calculator = new Calculator(previousNumElText, currentNumElText);

numbersEl.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorElNode.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalEl.addEventListener('click', (e) => {
  calculator.compute();
  calculator.updateDisplay();
});

clearEl.addEventListener('click', (e) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteEl.addEventListener('click', (e) => {
  calculator.delete();
  calculator.updateDisplay();
});
