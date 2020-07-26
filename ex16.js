"use strict";

let array = [4, 343, 11, 0, -57, 344, 908, 3];

console.log(array);

console.log("Index of minimum value is: " + (array.indexOf(Math.min(...array))));
console.log("Index of maximum value is: " + (array.indexOf(Math.max(...array))));

let inMin = array.indexOf(Math.min(...array));
let inMax = array.indexOf(Math.max(...array));

let arrayIndex = [inMin, inMax];

console.log(arrayIndex);