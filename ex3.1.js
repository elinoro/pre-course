"use strict";
const input = require('readline-sync');
const num = parseInt(input.question("Enter a number between 0-9: "));
const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const isInArray = array1.includes(num);

let INDEX = array1.indexOf(num);
if (isInArray){
    array1.splice(0, 10, 'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE');
    console.log(array1[INDEX]);
}
else {
    console.log("Your number is not valid");
}
