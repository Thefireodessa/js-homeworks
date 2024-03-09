'use strict';

let a = 5;

if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

if (a > 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (a < 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (a >= 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

if (a <= 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (a === 'test') {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

if (a === '1') {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (a > 0 && a < 5) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}

console.log(a);

let b = 3;

if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


let num = 3;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'невірне значення';
}

console.log(result);
