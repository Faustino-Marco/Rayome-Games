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

let response = prompt("Quick! What's Marco's favorite sports team?");

if (response.toLowerCase().includes("hawks")) {
    document.write("That's right GO HAWKS! Thanks for checking out our webpage!");
} else if (response.toLowerCase().includes("seattle")) {
    document.write("Ooooh close! Marco loves all Seattle teams but the Seahawks are his favorite! Anyways, thanks for visiting our website!");
} else if (response.toLowerCase().includes("broncos")) {
    document.write("Russell Wilson is a traitor, and you're just as evil for even typing that.");
    console.log("Traitor.");
} else {
    document.write("Nope. Its the Seattle Seahawks! GO HAWKS BABY!!");
}

// let age = prompt("How ld is your cat?");
// if (age == 20) {
//     console.log("Wow, that's old");
// } else if (age === 10) {
//     console.log("You've them a while!");
// } else if (age < 10 && age > 0) {
//     console.log("Aww, kitty!");
// }