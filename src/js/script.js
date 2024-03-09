'use strict';

const birthYear = prompt("Type your birth year");
const city = prompt("Type your city of residence");
const favoriteSport = prompt("Type your favorite sport");

if (birthYear !== null && city !== null && favoriteSport !== null) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear, 10);

    let message;

    if (city === "Kyiv" || city === "Washington" || city === "London") {
        message = `You live in the capital ${getCountryByCapital(city)}`;
    } else {
        message = `You live in the city ${city}`;
    }

    alert(`${message}\nYour age is ${age}`);


    const sportsChampions = {
        "football": "Johan Cruyff",
        "basketball": "Kobe Bryant",
        "tennis": "Serena Williams"
    };

    if (sportsChampions.hasOwnProperty(favoriteSport.toLowerCase())) {
        const championName = sportsChampions[favoriteSport.toLowerCase()];
        alert(`Cool! Do you want to become ${championName}?`);
    } else {
        alert("It's a shame you didn't want to enter information about your favorite sport");
    }
} else {
    alert("It's a shame you didn't want to enter the information");
}


function getCountryByCapital(capital) {
    switch (capital) {
        case "Kyiv":
            return "Ukraine";
        case "Washington":
            return "USA";
        case "London":
            return "United Kingdom";
        default:
            return "unknown country";
    }
}