'use strict';

//1
let output = '';
for (let i = 10; i <= 20; i++) {
    output += i + ', ';
}
console.log(output.slice(0, -2));

//2
for (let i = 10; i <= 20; i++) {
    console.log(i ** 2);
}

//3
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

//4
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

//5
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);

//6
let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
}
const average = sum1 / 500;
console.log(average);

//7
let sum2 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);

//8
for (let i = 100; i <= 200; i += 3) {
    console.log(i);
}

//9
const number = 24;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

//10
let count = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++;
    }
}
console.log(count);

//11
let sum3 = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sum3 += i;
    }
}
console.log(sum3);

//12
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}
