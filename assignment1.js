"use strict";
let input = require('readline-sync');
console.log("\nWelcome to the quiz!\n\nLet\'s Begin!\n\nHow are you coping with the Covid?\n\n");    

console.log("1. The government declared lockdown, what is your first thought?");
let question1 = input.keyInSelect([
    'Yay! Playing computer games is my favorite activity.', 
    'Excellent! We must fight this!',
    'I will miss my mom so much!!!! I must see her every day! this is a disaster!!!!!!', 
    'Nonsense. Covid is not real.'
    ])

let value1 = [1, 2, 3, 4];
let ans1 = (value1[question1]);

console.log("\n\n2. Is your kitchen fully stocked?");
let question2 = input.keyInSelect([
    'It\'s stocked for the next 4 months!',
    'The only food I want is my mom\'s. I guess I\'ll starve to death.',
    'What for? We\'re not in a war. Everything\'s cool. RELAX.',
    'Oh yeah, I have tons of snacks and ready meals. YUM!' 
    ])

let value2 = [2, 3, 4, 1];
let ans2 = (value2[question2]);

console.log("\n\n3. Do you order takeout?");
let question3 = input.keyInSelect([
    'Hell no!! It\'s food filled with CORONA!!',
    'Sure, all the time. I don\'t cook.',
    'Can I ask a delivery guy to bring me takeout from home?',
    'No, I go straight to the restaurant.' 
    ])

let value3 = [2, 1, 3, 4];
let ans3 = (value3[question3]);

console.log("\n\n4. What kind of mask do you wear?");
let question4 = input.keyInSelect([
    'My mom sent me via mail masks she made.',
    'None, masks are a way to get our money! We don\'t need them.',
    'I\'m at home all the time, I don\'t need a mask.',
    'Those big clear face shields, no other option is acceptable!'
    ])

let value4 = [3, 4, 1, 2];
let ans4 = (value4[question4]);

console.log("\n\n5. When did you last see your grandmother?");
let question5 = input.keyInSelect([
    'Today. She was coughing a bit, maybe an alergic reaction...',
    'A very long time ago! She must be anxious to see me again!',
    'Uhh..maybe five months ago? I didn\'t go out very often even before the Covid.',
    'I stoped visiting her when we first heard of the Covid, before it even got here.'
    ])

let value5 = [4, 3, 1, 2];
let ans5 = (value5[question5]);

console.log("\n\n6. When you hear Yoram Lass speak, how does it make you feel?");
let question6 = input.keyInSelect([
    'Isn\'t that the guy from the meme?', 
    'Truth be told!',
    'Man, freedom of speach went too far with this one.',
    'Who cares?? I miss my mom.'
    ])

let value6 = [1, 4, 2, 3];
let ans6 = (value6[question6]);

console.log("\n\n7. Someone sneezes on you, what do you do?");
let question7 = input.keyInSelect([
    'Yuck, but no harm done.',
    'I\'m getting tested for Covid right away!',
    'I\'ll call my mom, ask her what should I do.',
    'I\'m at home, I can\'t get sneezed on by anybody.'
    ])

let value7 = [4, 2, 3, 1];
let ans7 = (value7[question7]);

console.log("\n\n8. How did you plan to make use of your time during the lockdown?");
let question8 = input.keyInSelect([
    'Computer games & Netflix.',
    'Meanwhile, I called my parents 15 times this last week, so..there\'s that.',
    'I\'m living life as usual, don\'t believe everything you hear on the TV.',
    'Writing posts on facebook about how to be safe and well during this hard time.' 
    ])
    
let value8 = [1, 3, 4, 2];
let ans8 = (value8[question8]);

console.log("\n\n9. How many series did you complete by now?");
let question9 = input.keyInSelect([
    'None, the only thing I watch is the news.',
    'My mom and I we\'re in the middle of one when all this started,\nwe\'ll wait until we\'re able to watch it together again.',// [3]
    '8ish.',
    'Who has time for television? I meet friends and go out.'
    ])

let value9 = [2, 3, 1, 4];
let ans9 = (value9[question9]);

console.log("\n\n10. Finally, what do you miss the most?");
let question10 = input.keyInSelect([
    'Duh, my mother. She\'s my best friend.',
    'Nothing I guess, I\'m cool. Having the time of my life.',
    'Routine, when everything\'s in order.',
    'When everyone wasn\'t talking about this made up virus.'
    ])
    
let value10 = [3, 1, 2, 4];
let ans10 = (value10[question10]);

let resultAll = ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10;
console.log("\n\nResults:");
if(resultAll<18){
    console.log("\n\nYou're a netflix & chill kind of guy. You're probably lacking vitamin D, not good!\n");
}
else if(resultAll>17 && resultAll<26){
    console.log("\n\nThe Covid has taken control over you. Take a chill pill, relax.\n");
}
else if(resultAll>25 && resultAll<35){
    console.log("\n\nYou're a mama's boy. Get a grip, you're not getting any younger.\n");
}

else{
    console.log("\n\nThe Covid is a conspiracy, is that what you're saying? Oh brother...\n");
}