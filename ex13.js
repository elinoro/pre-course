"use strict";
let input = require('readline-sync');
let userString = input.question("Hi! Where would you like to travel to and why? ");

let array = userString.split(" ");
let filtered = array.filter(x => /^[A-Za-z]*$/.test(x));

console.log(filtered);


let longestWord = filtered.sort(
    (wordA, wordB) => {
    return wordB.length - wordA.length;
    }
);
console.log(longestWord[0]);