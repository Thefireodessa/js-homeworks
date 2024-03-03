'use strict';

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);

console.log('Salary amount:', sum);
