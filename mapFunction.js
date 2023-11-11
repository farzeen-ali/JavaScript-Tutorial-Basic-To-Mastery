//************************Map Function************************ 
//without Map Function

// let arr = [10,30,50,70];

// let result = [];

// for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i]*2;
// }

// console.log(result);

//using Map Function

let arr = [10,30,50,70];

//using anonymous function
// let result = arr.map(function(num){
//     return num*3;
// });
//using arrow function
let result = arr.map((num) => num*2);

console.log(result);