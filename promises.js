/*************************** Promises *********************
a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
P
A promise may have one of three states.

Pending
Fulfilled
Rejected

A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.
*/

// console.log("Hello");

// setTimeout(function(){
//     console.log("My Name Is Farzeen Ali")
// }, 3000);

// console.log("Good Morning");

//Promise

let promise = new Promise(function(resolve, reject){
    console.log("I'm a Promise");
    resolve(12);
})

console.log(promise);