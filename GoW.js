"use strict";
let input = require('readline-sync');
console.log("\n/////-----Welcome to WAR-----/////");
let name = input.question("\nPlease enter your name: ");
console.log("\nHello "+name+", you currently have 50 ILS.");
let userScore = 0;
let computerScore = 0;
let userCash = 50;

while(userCash>=1){
    let bet = input.questionInt("\nPlace your bet for the next round -> 1 to "+userCash+": ");
    if(bet<=userCash && bet>0){
        let userCard = (Math.floor(Math.random() * 12) + 1);
        let computerCard = (Math.floor(Math.random() * 12) + 1);
        console.log("\nUser's card: "+ userCard+", \nComputer's card: "+computerCard);
        if(computerCard>userCard){
                computerScore = computerScore+1;
                userCash = userCash-bet;
                console.log("\nComputer wins this round! You're a loser!!!\nYou have "+userCash+" ILS.");
        }
        else if(computerCard<userCard){
            userScore = userScore+1;
            userCash = userCash+bet;
            console.log("\nYou win this round! Hooray!\nYou have "+userCash+" ILS.");
        }
        else{
            console.log("\nIt's a tie!");
        }  
        
        let continueGame = input.question("\nWould you like to continue the game? Choose yes/no: ");
        if(continueGame === "no"){
            console.log("\nGame over! You have "+userCash+"ILS.")
            break;
        }
    }
    
    else{
            console.log("\nBet not valid, try again.");
    }
}
if(userCash === 0 && userScore>computerScore){
    console.log("\nGame over! You've WON!!! :)");
}
else if(userCash === 0 && userScore<computerScore){
    console.log("\nGame over! You've LOST! :(");
}
else if(userCash === 0 && userScore === computerScore){
    console.log("\nGame over! It's a tie!");
}
