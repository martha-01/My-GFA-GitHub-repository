/*Numbers:*/

function tellingAge() {
    let yearOfBirth = prompt("When were you born? Year of birth: ");
    let thisYear = new Date().getFullYear();
    let age = thisYear - yearOfBirth;
    console.log("Now you are " + age + " years old, then.");
}
tellingAge();

const ww2_startDate = 1939;
const ww2_endDate = 1945;
const ww2 = ww2_endDate - ww2_startDate;
console.log("WorldWar2 lasted for " + ww2 + " years."); 

let tesla_USD = 686.28;
let tesla = tesla_USD * 76;
console.log("76 shares of Tesla are at USD " + tesla + " as of today.");

const secondsOfMinute = 60;
const minutesOfHour = 60;
const hoursOfDay = 24;
const secondsOfDay = hoursOfDay * minutesOfHour * secondsOfMinute;
console.log("There are " + secondsOfDay + " seconds in a day.");

let populationOfTheWorld = 7854088785;
let populationOfHungary = 9660351;
let hungarians = populationOfHungary / populationOfTheWorld * 100;
console.log("The population of the Republic of Hungary constitutes the " + hungarians + "% of the world's population.");

const areaOfChina_km2 = 9596960;
const areaOfCheczRepublic_km2 = 78866;
const bigger = areaOfChina_km2 - areaOfCheczRepublic_km2;
console.log("The area of China is " + bigger + " km2 bigger than that of the Checz Republic.");

let participants = 654 % 7;
console.log("The number of participants in the smallest group would be " + participants + ".");


/*Arrays:*/

let names = ["Lili", "Károly", "Béla", "Ágota", "Kriszti"];
console.log(names);
console.log(names[2].length > 5);

names.push("Tünde", "Pisti");
console.log(names);

names[0] = "Márti";
console.log(names);

console.log(names.length > 4);


/*Objects:*/

let apples = {
    colors: ["red", "green", "yellow"],
    sizes: ["small", "medium", "large", "extra-large"],
    varieties: ["Idared", "Jonagold", "Golden", "Jonathan", "Granny Smith"]
};

apples.hasManyColors = false;

if (apples['colors'].length > 3) {
    apples.hasManyColors = true;
}
else {
    apples.hasManyColors = false
};

console.log(apples);

console.log("\n\nKapocs Márta");