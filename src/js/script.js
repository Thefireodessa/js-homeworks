'use strict';

const arr = [1, 2, 3, 4, 5];

// Знайдіть суму елементів масиву
let sum = 0;
for (const num of arr) {
    sum += num;
}
console.log(`Сума елементів масиву: ${sum}`);

// Знайдіть суму квадратів елементів масиву
let squareSum = 0;
for (const num of arr) {
    squareSum += Math.pow(num, 2);
    // або squareSum += num ** 2;
}
console.log(`Сума квадратів елементів масиву: ${squareSum}`);
