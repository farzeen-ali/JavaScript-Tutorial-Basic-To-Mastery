/* **************** Hoisting In JavaScript *****************  
The Default behavior of moving all the declarations at the top of the scope before code execution.
*/ 
"use strict"
// greetings();

// function greetings(){
//     console.log("Good Night");
// }


//Variable -- Var

// var a; //declaration

// a = undefined;
// a = 7;
// console.log(a);

// // a = 10; //assignment / initialization
// // var a; //declaration

// var a = 10;

//Variable -- let
// console.log(b);
// b = 2;
// let b = 3;

//Function Expression ---> hoisting is not working
// greet();
// var greet = function(){
//     console.log("first");
// }


// function show(){
    
//     console.log(age);
//     age = 19;
//     var age;
//     }       

//     show();

// var age;
age = 18;
console.log(age);



