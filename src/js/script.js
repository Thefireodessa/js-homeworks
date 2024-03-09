'use strict';

const userAgeInput = prompt('Введіть ваш вік');

if (!isNaN(userAgeInput) && userAgeInput !== null) {
    const userAge = parseInt(userAgeInput);

    let ageWord;
    if (userAge % 10 === 1 && userAge % 100 !== 11) {
        ageWord = 'рік';
    } else if ((userAge % 10 >= 2 && userAge % 10 <= 4) && (userAge % 100 < 10 || userAge % 100 >= 20)) {
        ageWord = 'роки';
    } else {
        ageWord = 'років';
    }

    alert(`Ваш вік ${userAge} ${ageWord}`);
} else {
    alert('Будь ласка, введіть коректне число');
}
