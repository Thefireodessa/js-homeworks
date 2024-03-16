'use strict';

function power(base, exponent = 1) {
    if (typeof base !== 'number' || typeof exponent !== 'number' || isNaN(base) || isNaN(exponent)) {
        return 'Помилка. Будь ласка, введіть числа.';
    }
    return Math.pow(base, exponent);
}

const inputBase = prompt('Введіть число:');
const inputExponent = prompt('Введіть ступінь:');

const base = parseFloat(inputBase);
const exponent = parseFloat(inputExponent);

const result = power(base, exponent);
alert(`Результат: ${base} в ступені ${exponent} дорівнює ${result}`);
