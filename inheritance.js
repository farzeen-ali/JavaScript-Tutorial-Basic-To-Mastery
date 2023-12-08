/*
 ******************* Inheritance In JavaScript ***************
 Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods and properties of another class.

Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the extends keyword.

*/
// parent / base / super class
class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello I'm ${this.name}`);
    }
}

// child / derived / sub class
class Student extends Person{
    sayPresent(){
        console.log("Present Sir");
    }
}

class Employee extends Person{

}

let student1 = new Student("Farzeen");
student1.greet();
student1.sayPresent();

let employee1 = new Employee("Ali");
employee1.greet();
