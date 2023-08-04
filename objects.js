/**************** Objects In JavaScript **************************** 
An Entity having state and behavior.(properties and method)
e.g:
car,pen,laptop,employee

How to model a problem in Objects:
Noun--> Object ----> Employee
Adjective----> Properties(Attributes) ---> empName, empAge, empSalary....
Verb----> Method(Behavior or Action) ----> sayHello()....
*/

// let employee = {
//     // 'First Name' : 'Farzeen',
//     firstName : 'Farzeen',
//     lastName : 'Ali',
//     age : 22
// };
// console.log(employee);
//Two Methods to access an object properties
//First Method ------> Dot Notation
// console.log(employee.firstName);

// console.log(employee.First Name);---->error

//Second Method ------> Array Notation
// console.log(employee['age']);
// console.log(employee['First Name']);

// return undefined if the property does not exist
// console.log(employee.salary);

//Add a property in existing object

// employee.salary = 50000;

// console.log(employee);
// console.log(employee.salary);

// Update a property
// employee.age = 23;
// console.log(employee.age);

//delete a property
// delete employee.lastName;
// console.log(employee);

//check whether a property exist or not

// console.log(employee.department);
//Second Method----> in keyword
// console.log('department' in employee);
// console.log('age' in employee);

//Traverse properties of an object
//for in loop
// for(let key in employee)
// {
//     // console.log(key);
//     // console.log(key + ": " + employee.key);----->return undefined
//     console.log(key + ": " + employee[key]);
// }


        //Object Methods
//Four ways to define a method in objects
//First Method:

// employee.greetings = function (){
//     console.log("Hello From First Method");
// }

// greetings();---error
// employee.greetings();

//Second Method:
// function hello()
// {
//     console.log("Hello From Second Method");
// }

// employee.greetings = hello;

// employee.greetings();

// Third Method:
// let employee = {
//     firstName : 'Farzeen',
//     lastName : 'Ali',
//     age : 22,
//     greetings : function (){
//         console.log("Hello From Third Method");
//     }
// };

// employee.greetings();

//Fourth Method:

let employee = {
        firstName : 'Farzeen',
        lastName : 'Ali',
        age : 22,
        greetings (){
            console.log("Hello From Fourth Method");
        }
    };

employee.greetings();
