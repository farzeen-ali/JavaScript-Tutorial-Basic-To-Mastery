/*************** Object Constructor Function ********************* */
/*
    creates and initializes an object instance.
    a constructor gets called when an object is created using the new keyword.

    Syntax:
    function MethodName(parameter list){
        code.....
    }
*/

// let employee1 = {
//     firstName : "Farzeen",
//     lastName : "Ali",
//     salary : 50000,
//     department : "IT"
// }
// let employee2 = {
//     firstName : "Huzaifa",
//     lastName : "Khan",
//     salary : 60000,
//     department : "AF"
// }

//Object Constructor Function
function Employee(first, last, salary, dep){
    this.firstName = first;
    this.lastName = last;
    this.salary = salary;
    this.department = dep;

    // this.bonus = '10%';

    this.fullInfo = function(){
            return this.firstName + " " + this.lastName + " " + this.salary + " " + this.department;
        }
}

let employee1 = new Employee("Farzeen","Ali",50000,"IT");
// if you want to add any property in employee1 object then you can do this
// employee1.bonus = '10%';

// Employee.bonus = '20%'; ----> not working

// if you want to add any function in employee1 object then you can do this
// employee1.fullInfo = function(){
//     return this.firstName + " " + this.lastName + " " + this.salary + " " + this.department;
// }

console.log(employee1);
// console.log(employee1.fullInfo());
let employee2 = new Employee("Huzaifa","Khan",60000,"AF");
console.log(employee2);
console.log(employee2.fullInfo());
