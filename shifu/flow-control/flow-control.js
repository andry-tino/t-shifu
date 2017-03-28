/**
 * flow-control.js
 * Andrea Tino - 2016
 */

// ------------------------
// Intro
// ------------------------

var weight = prompt("Your weight in grams...");
weight = parseInt(weight / 1000); // Run only if weight > 1000

// ------------------------
// If statement
// ------------------------

if (weight > 1000) {
    weight = parseInt(weight) / 1000;
}

// ------------------------
// If-Else statement
// ------------------------

if (weight > 1000) {
    weight = parseInt(weight) / 1000;
} else {
    weight = 0; // You are just too light
}

// ------------------------
// If-ElseIf-Else statement
// ------------------------

if (weight > 1000) {
    weight = parseInt(weight) / 1000;
} else if (weight <= 1000) {
    weight = 0; // You are just too light
} else {
    alert("Negative numbers are invalid!");
}

// ------------------------
// For statement
// ------------------------

var sum = 0;
var N = parseInt(prompt("Type a number"));

// Calculate 0 + 1 + 2 + ... + N
for (var i = 0; i <= N; i++) {
    sum = sum + i;
}

alert("The first N sum is: " + sum);

// ------------------------
// Switch statement
// ------------------------

var language = prompt("Type a language (en, jp, it)");
var greeting;

switch (language) {
    case "en": greeting = "Hello World!"; break;
    case "jp": greeting = "Konnichiwa!"; break;
    case "it": greeting = "Ciao Mondo!"; break;
    default: greeting = "???"; break;
}

alert(greeting);