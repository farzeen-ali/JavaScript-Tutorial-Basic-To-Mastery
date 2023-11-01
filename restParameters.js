//problem
// function add(a, b){
//     console.log(a+b);
// }

//rest parameter
function add(...args){
    let sum = 0;
    // console.log(args);
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum)
}

add(2,3);
add(2,3,4);
add(2,3,4,5);
