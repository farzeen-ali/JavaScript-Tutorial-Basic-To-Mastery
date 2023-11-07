// let employee = {
//     name : 'Farzeen',
//     age : 21,
//     dep : 'CS'
// };

// let name = employee.name;
// console.log(name)

//Object Destructuring
// let{name, age, dep} = employee;

// console.log(name)
// console.log(age)
// console.log(dep)

// let{name : firstName, age, dep} = employee;
// console.log(firstName)

// let{name, age = 33, dep} = employee;
// console.log(age);

let employee = {
    name : 'Farzeen',
    age : 21,
    
    contact : {
        email : 'f@f.com',
        phone : '123456789'
    }
};

let{name, age, contact : {email, phone} } = employee;
console.log(email)
console.log(phone)