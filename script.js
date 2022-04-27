const calculatorEl = document.querySelector('.calculator');
const displayEl = document.querySelector('.display');
const btnsEl = document.querySelectorAll('btns');

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
