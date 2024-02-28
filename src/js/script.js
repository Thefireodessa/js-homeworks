'use strict';

let temperature = prompt("Type temperature level");

if (!isNaN(temperature) && temperature !== null && temperature !== "") {
    let unit = prompt("Type temperature unit (C or F)");

    if (unit.toUpperCase() === "C") {
        let fahrenheit = (parseFloat(temperature) * 9 / 5) + 32;
        alert("Temperature in fahrenheit is " + fahrenheit.toFixed(2) + " °F");
    } else if (unit.toUpperCase() === "F") {
        let celsius = (parseFloat(temperature) - 32) * 5 / 9;
        alert("Temperature in сelsius is " + celsius.toFixed(2) + " °C");
    } else {
        alert("You should type a C or F");
    }
} else {
    alert("You should type a number");
}