'use strict';

const userInput = prompt('Введіть число:');
const number = parseInt(userInput);

if (isNaN(number) || number < 1) {
    console.log('NaN');
} else {
    let smallestDivisor = 2;

    while (smallestDivisor <= Math.sqrt(number)) {
        if (number % smallestDivisor === 0) {
            console.log(`Мінімальний дільник числа ${number}: ${smallestDivisor}`);
            break;
        }
        smallestDivisor++;
    }

    if (smallestDivisor > Math.sqrt(number)) {
        console.log(`Число ${number} є простим, мінімальний дільник - саме число.`);
    }
}
