"use strict";

let input = require('readline-sync');

let usersInput = input.question("\n\nHi! Tell me one good thing that happened to you this week:\n\n");

usersInput = usersInput.replace(/ /g, "*");
console.log(usersInput);

