'use strict';

// 1. Объединить два массива вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray);

// 2. Инвертировать массив.
const arrayToReverse = [1, 2, 3];
const reversedArray = arrayToReverse.reverse();
console.log(reversedArray);

// 3. Добавить элементы в конец массива.
const arrayToPushEnd = [1, 2, 3];
arrayToPushEnd.push(4, 5, 6);
console.log(arrayToPushEnd);

// 4. Добавить элементы в начало массива.
const arrayToPushStart = [1, 2, 3];
arrayToPushStart.unshift(4, 5, 6);
console.log(arrayToPushStart);

// 5. Вывести первый элемент массива.
const arrayFirstElement = ['js', 'css', 'jq'];
console.log(arrayFirstElement[0]);

// 6. Вывести последний элемент массива.
const arrayLastElement = ['js', 'css', 'jq'];
console.log(arrayLastElement[arrayLastElement.length - 1]);

// 7. Записать в новый массив элементы [1, 2, 3].
const arrayToSlice1 = [1, 2, 3, 4, 5];
const slicedArray1 = arrayToSlice1.slice(0, 3);
console.log(slicedArray1);

// 8. Записать в новый массив элементы [4, 5].
const arrayToSlice2 = [1, 2, 3, 4, 5];
const slicedArray2 = arrayToSlice2.slice(3);
console.log(slicedArray2);

// 9. Преобразовать массив в [1, 4, 5].
const arrayToSplice = [1, 2, 3, 4, 5];
arrayToSplice.splice(1, 2);
console.log(arrayToSplice);

// 10. Записать в новый массив элементы [2, 3, 4].
const arrayToSlice3 = [1, 2, 3, 4, 5];
const slicedArray3 = arrayToSlice3.slice(1, 4);
console.log(slicedArray3);

// 11. Преобразовать массив в [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arrayToInsert1 = [1, 2, 3, 4, 5];
arrayToInsert1.splice(3, 0, 'a', 'b', 'c');
console.log(arrayToInsert1);

// 12. Преобразовать массив в [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arrayToInsert2 = [1, 2, 3, 4, 5];
arrayToInsert2.splice(1, 0, 'a', 'b');
arrayToInsert2.splice(6, 0, 'c');
arrayToInsert2.push('e');
console.log(arrayToInsert2);

// 13. Отсортировать массив.
const arrayToSort = [3, 4, 1, 2, 7];
const sortedArray = arrayToSort.sort((a, b) => a - b);
console.log(sortedArray);

// 14. Найти сумму чисел в массиве.
const arrayToSum = [5, 6, 7, 8, 9];
const sum = arrayToSum.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 15. Создать массив квадратов чисел.
const arrayToSquare = [5, 6, 7, 8, 9];
const squaredArray = arrayToSquare.map(num => num ** 2);
console.log(squaredArray);

// 16. Оставить только отрицательные числа.
const arrayToFilterNegatives = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNumbers = arrayToFilterNegatives.filter(num => num < 0);
console.log(negativeNumbers);

// 17. Оставить только четные числа.
const arrayToFilterEven = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbers = arrayToFilterEven.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 18. Оставить только строки длиной более 5 символов.
const arrayToFilterLongStrings = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const longStrings = arrayToFilterLongStrings.filter(str => str.length > 5);
console.log(longStrings);

// 19. Оставить только подмассивы.
const arrayToFilterArrays = [1, 2, [3, 4], 5, [6, 7]];
const subArrays = arrayToFilterArrays.filter(Array.isArray);
console.log(subArrays);

// 20. Посчитать количество отрицательных чисел.
const arrayToCountNegatives = [5, -3, 6, -5, 0, -7, 8, 9];
const countNegatives = arrayToCountNegatives.filter(num => num < 0).length;
console.log(countNegatives);
