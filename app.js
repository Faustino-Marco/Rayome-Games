'use strict';

// declare a variable, assign it the value of user's input
// let userName = prompt("What is your name?");

// // print user's input to the console
// console.log(userName);

// // how to put data on page
// if (userName == "Marco") {
//     console.log("Hiya Marco!");
// } else {
//     console.log("Hello friend! Welcome");
// }

// let firstPlace = promt("Welcome " + userName + "! Where have you traveled?");
// console.log("First place = " + firstPlace);

// let place = prompt("Where else have you traveled?");
// console.log("Second place = " + place);

// document.write("<p id='username'>" + userName + "</p>");

let response = prompt("What's Marco's favorite sports team?");

if (response.toLowerCase() === "seattle seahawks") {
    document.write("That's right GO HAWKS!");
} else if (response.toLowerCase() == "rainbow") {
    document.write("That's not even a team...");
} else {
    document.write("Nope. Its the Seattle Seahawks GO HAWKS BABY!!");
}

// let age = prompt("How ld is your cat?");
// if (age == 20) {
//     console.log("Wow, that's old");
// } else if (age === 10) {
//     console.log("You've them a while!");
// } else if (age < 10 && age > 0) {
//     console.log("Aww, kitty!");
// }