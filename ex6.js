"use strict";

let readLineSync = require('readline-sync');

let num = readLineSync.questionInt("Enter a number: ");

if(num<=10){
    num = readLineSync.questionInt("Please choose a number larger than 10: ");

        while(num<=10){
            num = readLineSync.questionInt("Please choose a number LARGER than 10: ");
        }
            if(num>10){
                console.log("Thank you");
            }
}

else{
    console.log("Thank you");
}