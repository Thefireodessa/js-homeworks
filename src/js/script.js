'use strict';

    const operand1 = parseFloat(prompt("Type your first number"));

    const operand2 = parseFloat(prompt("Type your second number"));

    if (isNaN(operand1) || isNaN(operand2)) {
        alert("Type the correct number");

    } else {
        alert("addition: " + (operand1 + operand2));
        alert("subtraction: " + (operand1 - operand2));
        alert("multiplication: " + (operand1 * operand2));

        if (operand2 !== 0) {
            alert("division: " + (operand1 / operand2));
        } else {
            alert("Division by zero is impossible");
        }
    }
