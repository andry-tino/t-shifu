/**
 * functions.js
 * Andrea Tino - 2016
 */

// -------------
// Intro
// -------------

function greet() {
    alert("Hello World!");
}

greet();

// -------------
// Arguments
// -------------

function greet(greeting) {
    alert(greeting);
}

greet("Hello World!");

// -------------
// Return values
// -------------

function sumOfFirstN(N) {
    var sum = 0;

    // Calculate 0 + 1 + 2 + ... + N
    for (var i = 0; i <= N; i++) {
        sum = sum + i;
    }

    return sum;
}

var sum = sumOfFirstN(3); // sum = 6
