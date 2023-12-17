let regEx = /very/g; //change globally
let message = "I'm a very very very good and very very very nice boy!";

// console.log(message.replace('very', 'VERY')); //only replace first occurrence 
console.log(message.replace(regEx, 'VERY'));