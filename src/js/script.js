'use strict';

//1
let x = 10, y = 7;
let result = x > y ? 'x більше за y' : 'x не більше, ніж y';
console.log(result);


//2
let userInput = prompt('Введіть ціле число:');
if (userInput !== null && !isNaN(userInput)) {
    let number = parseInt(userInput);
    let message;

    if (number >= 0) {
        message = 'позитивне';
    } else {
        message = 'негативне';
    }

    if (Math.abs(number) < 10) {
        console.log(`Число ${number} однозначне ${message}`);
    } else if (Math.abs(number) < 100) {
        console.log(`Число ${number} двоцифрове ${message}`);
    } else {
        console.log(`Число ${number} трицифрове та більше ${message}`);
    }
} else {
    console.log('Будь ласка, введіть коректне число.');
}


//3
let num1 = prompt('Введіть перше число:');
let num2 = prompt('Введіть друге число:');
let num3 = prompt('Введіть третє число:');

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    let maxNumber = num1;

    if (num2 > maxNumber) {
        maxNumber = num2;
    }

    if (num3 > maxNumber) {
        maxNumber = num3;
    }

    console.log(`Найбільше число: ${maxNumber}`);
} else {
    console.log('Будь ласка, введіть коректні числа.');
}


//4
let side1 = prompt('Введіть довжину першої сторони:');
let side2 = prompt('Введіть довжину другої сторони:');
let side3 = prompt('Введіть довжину третьої сторони:');

if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
    side1 = parseFloat(side1);
    side2 = parseFloat(side2);
    side3 = parseFloat(side3);

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        console.log('Трикутник існує.');
    } else {
        console.log('Трикутник не може існувати з заданими сторонами.');
    }
} else {
    console.log('Будь ласка, введіть коректні довжини сторін.');
}
