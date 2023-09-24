// Here we assigns various HTML elements to variables using the "getElementById" method from the DOM.
const calculateBtn = document.getElementById('calculateBtn');
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const operatorSelect = document.getElementById('operator');
const resultInput = document.getElementById('result');

//Add an event listener to the calculateBtn element
calculateBtn.addEventListener('click', calculate);

//Here we define the calculate function
function calculate() {
  const number1 = Number(number1Input.value);
  const number2 = Number(number2Input.value);
  const operator = operatorSelect.value;
  let result;

  //Perform calculations based on the selected operator
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else if (operator === '*') {
    result = number1 * number2;
  } else if (operator === '/') {
    result = number1 / number2;
  }

  //Set the calculated result to the resultInput value
  resultInput.value = result;
}

// Add event listeners to number1Input , number1Input, and operatorSelect elements 
// clearResult function is used for clear the displayed result
number1Input.addEventListener('input', clearResult);
number2Input.addEventListener('input', clearResult);
operatorSelect.addEventListener('change', clearResult);

//Here we define the clearResult function
function clearResult() {
  resultInput.value = '';
}