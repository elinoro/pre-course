"use strict";
let input = require('readline-sync');
let pali = input.question("Hey! Please write a word/number over 100: ");
function palindromeCheck(pali){
    let reversPali = pali.split("").reverse().join("")
    if(reversPali === pali){
        console.log("\n\nThe string is a palindrome");
    }
    else{
        console.log("\n\nThe string is NOT a palindrome");
    }
    return reversPali;
}
palindromeCheck(pali);