const doOperation = (num1, num2) => {
  console.log(`The sum is: ${num1 + num2}`);
  console.log(`The subtraction is: ${num1 - num2}`);
  console.log(`The multiplication is: ${num1 * num2}`);
  console.log(`The division is: ${num1 / num2}`);
};

let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter a number: "));

doOperation(num1, num2);
