/************** Object Prototype In JavaScript ******************/
/*
Prototypes are the mechanism by which JavaScript objects inherit features from one another
if we want to add new properties and methods at a later point of time, and these properties need sharing across all the instances(objects), then the prototype will be very handy.
*/

let details = {
    fullDetails : function(){
        return this.id + " " + this.name;
    }
}

let teacher = {
    id : 1,
    name : "Farzeen",
    // fullDetails : function(){
    //     return this.id + " " + this.name;
    // }
}

let student = {
    id : 10,
    name : "Ali",
    // fullDetails : function(){
    //     return this.id + " " + this.name;
    // }
    // age : 18
}

// console.log(teacher.age);--->not working

//Object Prototype Concept

// teacher.__proto__ = student;
// console.log(teacher.age);
// console.log(teacher)
// console.log(teacher.toString())

// console.log(student)

//inheritance
// teacher.__proto__ = details;
// student.__proto__ = details;

// console.log(teacher.fullDetails());
// console.log(student.fullDetails());

// console.log(teacher)
// console.log(student)



function Employee(first, last, salary, dep){
    this.firstName = first;
    this.lastName = last;
    this.salary = salary;
    this.department = dep;
}
let employee1 = new Employee("Farzeen","Ali",50000,"IT");
// console.log(employee1)

// Employee.bonus = '10%';----not working

Employee.prototype.bonus = '10%';

let employee2 = new Employee("Huzaifa","Khan",40000,"AF");
console.log(employee1)
console.log(employee2)
console.log(employee2.bonus)


String.prototype.custom = "Hi Mera Naam Farzeen Hai";
console.log(name.custom)
