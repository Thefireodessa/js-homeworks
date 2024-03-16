'use strict';

function filterPositiveNumbers(arr) {
    if (!Array.isArray(arr)) {
        return 'Помилка: переданий параметр має бути масивом.';
    }

    const positiveNumbers = [];

    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }

    if (positiveNumbers.length === 0) {
        return null;
    }

    return positiveNumbers;
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(filterPositiveNumbers(arr)); // [1, 2, 3]
