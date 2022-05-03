'use strict';

const clearEl = document.querySelector('.clear');
const deleteEl = document.querySelector('.delete');
const equalEl = document.querySelector('.equal');
const numberElNode = document.querySelectorAll('[data-number]');
const operatorElNode = document.querySelectorAll('[data-operator]');
const previousNumEl = document.querySelector('.previous-number');
const currentNumEl = document.querySelector('.current-number');

class Calculator {
  constructor(previousNumEl, currentNumEl) {
    this.previousNumEl = previousNumEl;
    this.currentNumEl = currentNumEl;
    this.clear();
  }

  clear() {
    this.previousNumEl = '';
    this.currentNumEl = '';
    this.operatorElNode = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentNumEl = number;
  }

  chooseOperator(operator) {}

  compute() {}

  updateDisplay() {
    this.currentNumEl.innerText = this.currentNumEl;
  }
}

const calculator = new Calculator(previousNumEl, currentNumEl);
