"use strict";
let input = require('readline-sync');
let num = input.questionInt("Please enter a positive number: ");

function factorial(num){
    let total = 1;
    for (let i = 1; i<=num ; i++){
        total*=i;
    }
return total;
}

console.log(factorial(num));
