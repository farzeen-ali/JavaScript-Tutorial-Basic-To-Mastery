/************** Random Method In JavaScript **********************/  
/*
a built-in method that is used to return a random number in the range 0 to 1. (with 0 being inclusive and 1 exclusive)
*/
let randomNumber;
// randomNumber = Math.random(); //return decimal value between 0  and 1
// randomNumber = Math.random() * 10; //return decimal value between 0  and 10
// randomNumber = Math.floor(Math.random() * 10); //return whole number value between 0  and 10
// randomNumber = Math.floor(Math.random() * 101); //return whole number value between 0  and 100
// randomNumber = Math.floor(Math.random() * 10) + 1; //return whole number value between 1  and 10(inclusive)
// randomNumber = Math.floor(Math.random() * (25 - 10)) + 10; 
// console.log(randomNumber);

function getRandomNumber(min,max)
{
    randomNumber = Math.floor(Math.random() * (max - min)) + min; 
    return randomNumber;
}
let result = getRandomNumber(25,35);
console.log(result);