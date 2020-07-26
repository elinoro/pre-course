"use strict";
let input = require('readline-sync');
let userString = input.question("How are you today?\n\n");

let array = userString.split("");

for(let i=0; i<=array.length; i++){
    if((array[i] == "a") || (array[i] == "e") || (array[i] == "i") || (array[i] == "o") 
    || (array[i] == "u") || (array[i] == "y")){
        array[i] = array[i].toUpperCase();
        }
}

let array2 = array.join("");
console.log(array2);
