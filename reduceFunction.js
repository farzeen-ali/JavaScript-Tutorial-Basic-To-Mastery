let arr = [1,2,3,4,5,6,7];

// using arrow function
// let result = arr.reduce((val1, val2) => val1 + val2);

//using anonymous function
// let result = arr.reduce(function(val1, val2){
//     return val1 + val2;
// })

//simple function
function red(val1, val2){
    return val1 + val2;
}
let result = arr.reduce(red);

console.log(result);
