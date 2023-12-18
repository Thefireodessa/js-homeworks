'use strict';

const firstString = prompt("Type your first string");
const secondString = prompt("Type your second string");
const thirdString = prompt("Type your third string");

console.log(firstString + thirdString + secondString);

const number = prompt("Type your five-digit number");

const separateNumber = number.toString().split('');
console.log(separateNumber.join(' '));