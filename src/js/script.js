'use strict';

function calculate() {

    const operation = prompt("Chose operation (add, sub, mult, div)");

    const num1 = parseFloat(prompt("Type your first number"));

    const num2 = parseFloat(prompt("Type your second number"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please, type the correct number");
    } else {
        var result;
        if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "sub") {
            result = num1 - num2;
        } else if (operation === "mult") {
            result = num1 * num2;
        } else if (operation === "div") {
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is impossible");
                return;
            }
        } else {
            alert("Unknown operation. Please select the correct operation.");
            return;
        }

        alert(num1 + " " + operation + " " + num2 + " = " + result);
    }
}

calculate();
