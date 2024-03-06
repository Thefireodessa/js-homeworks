'use strict';

const number1 = parseFloat(prompt("Type your first number"));
const number2 = parseFloat(prompt("Type your second number"));
const number3 = parseFloat(prompt("Type your third number"));

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Please, type correct number");
} else {
    var average = (number1 + number2 + number3) / 3;

    alert("Average is " + average);
}