'use strict';

let age = prompt("How old are you?");

if (!isNaN(age) && age > 0) {
    let futureAge = parseInt(age) + 10;
    alert("10 years later you will be" + futureAge + " years old.");
} else {
    alert("You should type a number.");
}