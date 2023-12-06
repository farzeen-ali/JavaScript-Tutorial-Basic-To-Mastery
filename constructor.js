/* 
************************ Constructors In JavaScript **************************   
The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.

*/

class User{
    // constructor(){
    //     console.log("Constructor Called....")
    // }
    constructor(n,a){
        console.log("Constructor Called....")
        this.firstName = n;
        this.age = a;
        alert("Name: " + this.firstName + " Age: " + this.age);

    }

    // userDetails(n, a){
    //     this.firstName = n;
    //     this.age = a;
    //     alert("Name: " + this.firstName + " Age: " + this.age);
    // }
}

let user1 = new User("Farzeen", 22);
let user2 = new User("Huzaifa", 2);
let user3 = new User("Bilal", 70);

// user1.userDetails("Farzeen", 22);
// user2.userDetails("Huzaifa", 21);
// user3.userDetails("Bilal", 29);
