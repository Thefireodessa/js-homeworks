'use strict';

var operation = prompt("Chose operation (add, sub, mult, div)");

const num1 = parseFloat(prompt("Type your first number"));
const num2 = parseFloat(prompt("Type your second number"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Please, type correct number");
} else {
    var result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mult":
            result = num1 * num2;
            break;
        case "div":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is impossible");
            }
            break;
        default:
            alert("Unknown operation. Please, chose correct operation");
    }

    if (result !== undefined) {
        alert(num1 + " " + operation + " " + num2 + " = " + result);
    }
}