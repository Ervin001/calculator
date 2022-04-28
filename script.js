const calculatorEl = document.querySelector('.calculator');
const displayEl = document.querySelector('.display');
const calcNode = document.querySelectorAll('.calculator');
const clearEl = document.querySelector('.clear');
const deleteEl = document.querySelector('.delete');
const percentEl = document.querySelector('.percent');
const decimalEl = document.querySelector('.decimal');
const divideEl = document.querySelector('.divide');
const multiplyEl = document.querySelector('.multiply');
const subtractEl = document.querySelector('.subtract');
const additionEl = document.querySelector('.addition');
const equalsEl = document.querySelector('.equals');
const oneEl = document.getElementById('one');
const twoEl = document.getElementById('two');
const threeEl = document.getElementById('three');
const fourEl = document.getElementById('four');
const fiveEl = document.getElementById('five');
const sixEl = document.getElementById('six');
const sevenEl = document.getElementById('seven');
const eightEl = document.getElementById('eight');
const nineEl = document.getElementById('nine');

console.log(oneEl);
const operator = function (opt, ...arr) {
  let total;

  const [num1, num2] = arr;

  function sum(num1, num2) {
    return num1 + num2;
  }
  function sub(num1, num2) {
    return num1 - num2;
  }
  function mul(num1, num2) {
    return num1 * num2;
  }
  function div(num1, num2) {
    return num1 / num2;
  }

  if (opt === 'add') return sum(num1, num2);

  if (opt === 'subtract') return sub(num1, num2);

  if (opt === 'multiply') return mul(num1, num2);

  if (opt === 'divide') return div(num1, num2);
};

console.log(operator('multiply', 22, 10));
