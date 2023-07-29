/*********************** Anonymous Function *************************** 
a function does not have any name.
Syntax:
    (function () {
        //block of code
    });    
*/

// (function ()
// {
//     console.log("Good Morning");
// });

//First Method to invoke anonymous Function ---> Function Expression (assign function to a variable)

// let msg = (function ()
// {
//     console.log("Good Morning - Anonymous Function");
// });

// msg();
// msg();

//Second Method to invoke anonymous Function ---> pass function as an argument to an another function


// setTimeout(functionName,timeInMilliSecs);

// setTimeout((function ()
// {
//     console.log("Good Morning - Anonymous Function - Using Set Time out Function");
// }), 3000);


//Third Method To Invoke Anonymous Function ---> Immediately Invoke Method

// (function ()
// {
//     console.log("Me Anonymous Function Hoon");
// })();

(function ()
{
    let message = "Me andar waala code hoon";
    function greetings()
    {
        console.log(message);
    }
    greetings();
})();
