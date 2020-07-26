"use strict";
let figlet = require('figlet');
let input = require('readline-sync');

console.log(figlet.textSync('Hang man', {
    font: 'banner',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

let options = ['banana', 'table', 'scissors', 'office', 'computer', 'corona', 'chicken'];
let word = options[Math.floor(Math.random() * options.length)];
let gameProgress = [];
for(let i=0; i<word.length; i++){
    gameProgress[i] = "*";
}

let attempts = 10;
let userWon = false;

console.log("\nYou have 10 guesses!\n");

while(attempts>0 && userWon === false){
    console.log("\nYou have "+attempts+" attempts left\n");
    let guess = input.question(gameProgress.join("") + "\nGuess a letter: \n\n").toLowerCase();

    // Check if valid
    console.log(`your guess is '${guess}'`);
    if(guess === "" || guess.match(/[^a-z]/i)){
        console.log("\nInvalid input!\n");
        continue;
    }

    for(let j=0; j<word.length; j++){
        if(word[j] === guess){
            gameProgress[j] = guess;
            
            if(gameProgress.join("") === word){
                userWon = true;
            }
        }
    } 
    attempts--;
}
if(userWon === true){
    console.log("\n" + word + "\n\nGood Job!");
}
else{
    console.log("\nYou have no attempts left, you lose!");
}

