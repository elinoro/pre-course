"use strict";
const input = require('readline-sync');

let num1 = parseInt(input.question("Enter a number: "));
let num2 = parseInt(input.question("Enter a second number: "));

function sumNums(x, y){
    if (x + y == 10){
       console.log ("Makes 10");
    }
    else{
        console.log ("Nope");
    }
}
sumNums(num1, num2);