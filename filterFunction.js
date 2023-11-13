// let arr = [1,22,15,3,6,9,67,98,54,23,87];

//using arrow function

// let result = arr.filter(val => val > 10);

//using anonymous function

// let result = arr.filter(function(val){
//     return val > 30;
// });

// console.log(result);


let student = [
    {
        name : 'Huzaifa',
        language : 'html'
    },
    {
        name : 'Farzeen',
        language : 'javascript'
    },
    {
        name : 'Ali',
        language : 'css'
    },
    {
        name : 'Ahmed',
        language : 'html'
    },
    {
        name : 'Khan',
        language : 'javascript'
    },
    {
        name : 'Bilal',
        language : 'css'
    },
]

let result = student.filter(val => val.language == 'javascript');

console.log(result)