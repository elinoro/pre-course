"use strict";
const input = require('readline-sync');

let num = input.questionInt("Please enter a number larger than 1: ");


for(let i=2; i<=num; i++){
    let x;
    for(x=2; x<=i; x++){
        if(i%x==0){
            break;
        }
    }
    if(i==x){
    console.log(i);
        }
}