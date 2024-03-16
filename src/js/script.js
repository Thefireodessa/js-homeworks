'use strict';

function generateKey(length, characters) {
    const charactersLength = characters.length;
    let key = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        key += characters.charAt(randomIndex);
    }

    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
