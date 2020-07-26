"use strict";
let input = require('readline-sync');
let len = input.questionInt("Hi! Enter a number: ");

let array =  new Array(len).fill().map(() => Math.floor(Math.random() * 50) + 1);

console.log(array);

console.log("Minimum is: " + Math.min(...array));
console.log("Maximum is: " + Math.max(...array));