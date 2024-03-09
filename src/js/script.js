'use strict';

const firstNumber = parseFloat(prompt("Type your first number"));
const secondNumber = parseFloat(prompt("Type your second number"));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please, type correct number");
} else {
    const addition = firstNumber + secondNumber;
    const subtraction = firstNumber - secondNumber;
    const multiplication = firstNumber * secondNumber;
    let division;
    if (secondNumber !== 0) {
        division = firstNumber / secondNumber;
    } else {
        alert("Division by zero is impossible");
    }

    alert(firstNumber + " + " + secondNumber + " = " + addition);
    alert(firstNumber + " - " + secondNumber + " = " + subtraction);
    alert(firstNumber + " * " + secondNumber + " = " + multiplication);

    if (division !== undefined) {
        alert(firstNumber + " / " + secondNumber + " = " + division);
    }
}