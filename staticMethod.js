/* **************** Static Method In JavaScript *********************
Static methods in JavaScript are associated with a class rather than an instance of the class.
They are called on the class itself, not on an instance of the class.
*/

class Employee{
    constructor(name){
        // this.name = name;
        this.name = Employee.capitalized(name);
    }
    intro(){
        console.log(`My name is ${this.name}`);
        // console.log(`My name is ${Employee.capitalized(this.name)}`);
    }
    static capitalized(name){
        // return name.charAt(0).toUpperCase() + name.substr(1, name.length);
        return name.toUpperCase();
    }
}

let a = new Employee("farzeen");
a.intro();
// a.capitalized(); this does not work