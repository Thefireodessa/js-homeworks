'use strict';

// 1
const arr1 = ['a', 'b', 'c', 'd'];
const result1 = `${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`;
console.log(result1);

// 2
const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);

// 3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr3[1][0]);

// 4
const obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
console.log(obj.js[0]);

// 5
const length = 5;
const arr5 = [];
for (let i = 0; i < length; i++) {
    arr5.push('x'.repeat(i + 1));
}
console.log(arr5);

// 6
const arr6 = [];
for (let i = 1; i <= 5; i++) {
    arr6.push(String(i).repeat(i));
}
console.log(arr6);

// 7
function arrayFill(value, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}
console.log(arrayFill('x', 5));

// 8
const arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;
let count8 = 0;
for (const num of arr8) {
    sum8 += num;
    count8++;
    if (sum8 > 10) {
        break;
    }
}
console.log(count8);

// 9
const arr9 = [1, 2, 3, 4, 5];
const reversedArr9 = [];
for (let i = arr9.length - 1; i >= 0; i--) {
    reversedArr9.push(arr9[i]);
}
console.log(reversedArr9);

// 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum10 = 0;
for (const innerArr of arr10) {
    for (const num of innerArr) {
        sum10 += num;
    }
}
console.log(sum10);

// 11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum11 = 0;
for (const innerArr1 of arr11) {
    for (const innerArr2 of innerArr1) {
        for (const num of innerArr2) {
            sum11 += num;
        }
    }
}
console.log(sum11);
