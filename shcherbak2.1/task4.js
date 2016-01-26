'use strict';

function showCountry(id){
    var country = countryList[id];
    document.write("Country: " + country.name +
        ", capital: " + country.capital +
        ", territory: " + country.territory +
        ", population: [");
    for(let p in country.population){
        document.write(p + ": " + country.population[p] + ", ")
    }
    document.write("],  population density: [" );
    for (let p in country.populationDensity()){
        document.write(p + ": " + country.populationDensity()[p] + ", ");
    }
    document.write("] <br/>");
}

function allCountry() {
    for (let id in countryList) {
        showCountry(id);
    }
}

function showCountryByTerritory(ter){
    for (let id in countryList) {
        if(countryList[id].territory < ter){
            showCountry(id);
        }
    }
}

function  showCountryByPopulation(size, year){
    for (let id in countryList){
        if(countryList[id].population[year] > size){
            showCountry(id);
        }
    }
}

function sortedByName() {
    let names = [];
    for (let id in countryList) {
        names.push(countryList[id].name);
    }

    names.sort(function (a, b) {
        return (a.toLowerCase()).localeCompare(b.toLowerCase());
    });

    for (let i in names) {
        for (let id in countryList) {
            if (names[i] == countryList[id].name) {
                showCountry(id);
            }
        }
    }
}

function calculateAveragePD(obj){
    let arr = [];
    for(let key in obj){
        arr.push(obj[key]);
    }

    let sum = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        count++;
    }

    return sum / count;
}

function sortedByPopulationDensity() {
    let populations = [];
    for (let id in countryList) {
        populations.push(calculateAveragePD(countryList[id].populationDensity()));
    }

    console.log(populations);
    populations.sort(function (a, b) {
        return a - b;
    });

    for (let i in populations) {
        for (let id in countryList) {
            if (populations[i] == calculateAveragePD(countryList[id].populationDensity())) {
                showCountry(id);
            }
        }
    }
}

function sortedByTerritory() {
    let ter = [];
    for (let id in countryList) {
        ter.push(countryList[id].territory);
    }

    ter.sort(function (a, b) {
        return b - a;
    });

    for (let i in ter) {
        for (let id in countryList) {
            if (ter[i] == countryList[id].territory) {
                showCountry(id);
            }
        }
    }
}


function Country(config){
    this.id = config.id;
    this.name = config.name;
    this.capital = config.capital;
    this.territory = config.territory;
    this.population = config.population;
    this.populationDensity = function() {
        var result = {};
        for (let p in this.population) {
            result[p] = Math.round(this.population[p] / this.territory);
        }
        return result;
    };
}

var country1 = new Country({
    id: 1,
    name: "Ukraine",
    capital: "Kiev",
    territory: 603628,
    population: {
        2014: 45.4 * 1000000,
        2012: 45.6 * 1000000,
        2010: 46 * 1000000
    }
});

var country2 = new Country({
    id: 2,
    name: "USA",
    capital: "Washington",
    territory: 9857000,
    population: {
        2014: 318914629,
        2012: 308745538,
        2010: 281421906

    }
});

var country3 = new Country({
    id: 3,
    name: "Ireland",
    capital: "Dublin",
    territory: 70273,
    population: {
        2014: 4581269,
        2012: 4109086,
        2010: 3791690
    }
});

var countryList = Object.create({}, {
    add:{
        value: function(country){
            if(!(country.id in country)){
                countryList[country.id] = country;
            }
        },
        enumerable: false
    }
});

countryList.add(country1);
countryList.add(country2);
countryList.add(country3);


allCountry();
document.write("<br>/");
document.write("<br>/");
showCountryByTerritory(700000);
document.write("<br>/");
document.write("<br>/");
showCountryByPopulation(50, 2014);
document.write("<br>/");
document.write("<br>/");
sortedByName();
document.write("<br>/");
document.write("<br>/");
sortedByTerritory();
document.write("<br>/");
document.write("<br>/");
sortedByPopulationDensity();
