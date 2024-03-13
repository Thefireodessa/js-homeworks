'use strict';

//1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//2
const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

//3
const N = 100;

for (let i = 1; i * i <= N; i++) {
    console.log(i);
}

//4
const number = 17; // Введіть ваше число для перевірки

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${number} - просте число` : `${number} - не просте число`);

//5
const targetNumber = 81; // Введіть ваше число для перевірки

let result = 1;
let exponent = 0;

while (result < targetNumber) {
    exponent++;
    result = Math.pow(3, exponent);
}

if (result === targetNumber) {
    console.log(`${targetNumber} можна отримати шляхом зведення числа 3 у ступінь ${exponent}`);
} else {
    console.log(`${targetNumber} не можна отримати шляхом зведення числа 3 у цілу ступінь`);
}
