/****************** Date Object In JavaScript ***************************/
//built-in object that stores the date and time.
//provides a number of built-in methods for formatting and managing the date


// let myDate = new Date("11 Aug 2023");
let myDate = new Date();
// console.log(typeof myDate); ---> object

// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());

//set date methods
// myDate.setDate(19);
// myDate.setFullYear(2001);
// myDate.setHours(11);
// myDate.setMinutes(41);
// myDate.setSeconds(21);
// myDate.setMilliseconds(71);
// myDate.setMonth(11);
// console.log(myDate);

//how to use this date object in daily life
console.log(myDate.getDate() + "/" + myDate.getMonth() + "/" + myDate.getFullYear() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + ":" + myDate.getMilliseconds());
