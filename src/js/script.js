'use strict';

function padString(str, length, char = '*', left = false) {
    // Перевіряємо, чи всі аргументи передані
    if (typeof str !== 'string' || typeof length !== 'number' || typeof char !== 'string' || typeof left !== 'boolean') {
        return 'Помилка. Будь ласка, перевірте введені дані.';
    }

    // Якщо довжина рядка менша або рівна вказаній довжині, додаємо символи
    if (str.length < length) {
        const diff = length - str.length;
        const padding = char.repeat(diff);
        return left ? padding + str : str + padding;
    }

    // Якщо довжина рядка більша за вказану, обрізаємо рядок
    if (str.length > length) {
        return str.substr(0, length);
    }

    // Якщо рядок вже має вказану довжину, повертаємо його без змін
    return str;
}

// Приклади викликів функції
console.log(padString('hello', 8));             // hello***
console.log(padString('hello', 6, '*', false));  // *hello
console.log(padString('hello', 2));              // he
