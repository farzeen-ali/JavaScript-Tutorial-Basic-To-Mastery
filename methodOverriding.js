class Parent{
    constructor(name){
        console.log("How Are You " + name + " ?")
    }
    // sayName(name){
    //     console.log("My Name is: " + name);
    // }
}

class Child extends Parent{
    constructor(name, age){
        super(name);
        console.log(name + " Age is: " + age);
    }
    // sayName(name){
    //     super.sayName("Ali");
    //     console.log("Mera naam " + name + " hai");
    // }
}

let c = new Child("Farzeen Ali",22);

// c.sayName("Farzeen");