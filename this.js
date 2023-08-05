// *************** This Keyword in JavaScript ***********************
/* refers to the current object or context where a piece of code is being executed
   allows you to access and work with the properties and methods of that object
*/

let person = {
    firstName : 'Farzeen', 
    lastName : 'Ali',
    age : 22,
    sayHello (){
        console.log("I'm " + this.firstName + " " + this.lastName + " and I've a " + laptop.brand + " laptop");
        console.log(this);
    }
}
// console.log(person);

console.log(this); //---->window object

let laptop = {
    brand : 'Dell',
    model : '2023'
}

// person.sayHello();