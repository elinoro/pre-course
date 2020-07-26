"use strict";

var input = require('readline-sync');

let people = parseInt(input.question("Hello! How many people are you going with? "));
if (Number.isInteger(people)){
    console.log("What kind of food do you want? "); 
    const kind = input.keyInSelect([
        'Italian',
        'Sushi',
        'Bar'
    ])

    let Kosher = input.question("Are you looking for a Kosher restaurant? ");
    if(Kosher === "yes"){
        let mehadrin = input.question("Are you looking for Kashrut Lemehadrin? ");
        if(mehadrin === "yes"){
            switch (kind){
                case 0:
                    console.log("I'd recommend Gusto");
                    break;
                case 2:
                    console.log("I'd recommend Oshi Oshi");
                    break;
                case 3:
                    console.log("Sorry, there aren't any bars in TLV with Kashrut Lemehadrin");
                    break;
                default:
                    throw Error("Non valid!");
            }
        }
        else if(mehadrin === "no"){
            switch (kind){
                case 0:
                    console.log("I'd recommend La Lasagna");
                    break;
                case 1:
                    console.log("I'd recommend Chuka");
                    break;
                case 2:
                    console.log("I'd recommend Tap House TLV");
                    break;
                default:
                    throw new Error("Non valid!");
            }
        }
        else
            throw new Error("Non valid!");
    }
    else if(Kosher === "no"){
        switch (kind){
            case 0:
                console.log("I'd recommend Pasta Mia");
                break;
            case 1:
                console.log("I'd recommend Frame");
                break;
            case 2:
                console.log("I'd recommend Night Shift");
                break;
            default:
                throw new Error("Non valid!");
        }
    }
    else{
        throw new Error("Non valid!");
    }
}
else{
    throw new Error("Non valid!");
}