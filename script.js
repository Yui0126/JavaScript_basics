// var numbersize = prompt("Enter a whole number!", "");
// if (numbersize < 10) {
//     for(var i = 0; i < 10; i++){
//         console.log(i);
//     }
// } else if (numbersize > 9) {
// console.log("You entered a big number!");
// } else {
//     console.log("an error has occured");
// };


// var color = prompt("What is your favorite color?","");
// var primaryColor = ["red","blue","yellow"];
// var secondaryColor = ["orange","green","purple"];

// if () {
//     console.log(`You picked a primary color: ${color}`);
// } else if (color === "orange") {
//             console.log(`You picked a secondary color: ${color}`);
// } else {
//     console.log("YOu have another color");
// }

// var color = prompt("What is your favorite color?","");
// var primaryColor = ["red","blue","yellow"];
// var secondaryColor = ["orange","green","purple"];
// for (var eachColor in primaryColor) {
//     if (color == eachColor) {
//         console.log("TRUE");
//     }
// }

// var primaryColor = ["red", "blue", "yellow"];
// for (var i = 0; i < primaryColor.length; i++) {
//     console.log(primaryColor[i]);
// };

// var myColor = "red"
// var secondaryColor = ["orange", "green", "purple"];
// var primaryColor = ["red", "blue", "yellow"];

// for (var i = 0; i < 3; i++) {
//     if (myColor === secondaryColor[i] || primaryColor[i]) {
//         console.log(`Your color is a secondary color: ${myColor}`);
//         // } else if (myColor === primaryColor[i]) {
//         //     console.log(`Your color is a primary color: ${myColor}`);
//         // } else {
//         //     console.log(`Hello your color is different: ${myColor}`);
//     }
// };


//Challenge 10-16
var yourName = prompt("What is your name?", "");

function hello(name) {
    if (name == null || name == "") {
        return "You did not give me a name :(";
    } else {
        return `Hello ${name}, and welcome!`;
    };
};

var sweets = ["ice cream", "chocolate", "chips", "berries"];
var dishes = ["soup", "rice", "pizza", "dumplings"];

function randomInit(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}

function hospitality(name, gift) {
    console.log(hello(yourName));
    var randomFood = gift[randomInit(0, gift.length - 1)];
    console.log(`${name}, would you like some ${randomFood}?`);
}
hospitality(yourName, dishes);



//Challenge