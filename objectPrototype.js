/************** Object Prototype In JavaScript ******************/
/*
if we want to add new properties and methods at a later point of time, and these properties need sharing across all the instances(objects), then the prototype will be very handy.
*/

let a = {
    name : "Farzeen",
    age : 22
}

let p = {
    name2 : "Ali",
}
a.__proto__ = p;
console.log(a.name2)


// function Employee(first, last, salary, dep){
//     this.firstName = first;
//     this.lastName = last;
//     this.salary = salary;
//     this.department = dep;
// }

// let employee1 = new Employee("farzeen","ali",60000,"IT");

// let employee2 = new Employee("huzaifa","khan",40000,"AF");

// employee1.bonus = '10%';

// Employee.prototype.bonus = '10%';

// console.log(employee1.bonus);
// console.log(employee2.bonus);
