/********************** Getters & Setters Functions ********************* 
*)getters ---> can be used to access the properties of an object
Syntax: 
get methodName()
{
    //code for getting the property
}
*)setters ---> can be used to execute a function whenever a specified property is attempted to be changed 
Syntax: 
set methodName(parameter)
{
    //code for setting the property
}
*/

let student = {
    firstName : "Farzeen",
    // getName : function()
    // {
    //   return this.firstName.toUpperCase();
    // }
    // Getter Method
    // get getName()
    // {
    //     return this.firstName.toUpperCase();
    //     // return this.firstName.trim();
    // }

    //setter Method
    set setName(name)
    {
        this.firstName = name.toUpperCase();
    }
}

// console.log(student.firstName);
//without using getter
// console.log(student.getName());
//with using getter method
// console.log(student.getName);


// student.firstName = "Ali";
// console.log(student)


//Setters
student.setName = "ali";
console.log(student);










