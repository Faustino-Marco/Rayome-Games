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

// let Team = prompt("Quick! What's Marco's favorite sports Team?");

// if (Team.toLowerCase().includes("hawks")) {
//     document.write("<p> <id='go-hawks'> That's right GO HAWKS! Thanks for checking out our webpage! </p>");
//     console.log("Nailed it.");
// } else if (Team.toLowerCase().includes("seattle")) {
//     document.write("Ooooh close! Marco loves all Seattle Teams but the Seahawks are his favorite! Anyways, thanks for visiting our website!");
// } else if (Team.toLowerCase().includes("broncos")) {
//     document.write("Russell Wilson is a traitor, and you're just as evil for even typing that.");
//     console.log("Traitor.");
// } else {
//     document.write("Nope. Its the Seattle Seahawks! GO HAWKS BABY!!");
// }


// let last_name = "simpliciano";

// let age = prompt("How ld is your cat?");
// if (age == 20) {
    //     console.log("Wow, that's old");
    // } else if (age === 10) {
        //     console.log("You've them a while!");
        // } else if (age < 10 && age > 0) {
//     console.log("Aww, kitty!");
// }

let pictures = prompt("how many circles? (1-5)");
let i = 1
while (i <= pictures) {
    document.write("<image src=\"data:image/png;base64,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\">");
    i++;
}









