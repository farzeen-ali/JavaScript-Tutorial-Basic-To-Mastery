let pr1 = new Promise((resolve, reject) => {
    console.log("Promise Is Pending.....");
    setTimeout(() => {
        // console.log("Promise is FulFilled");
        resolve(true);
        // reject(new Error("I'm an Error"));
    }, 5000);
})

pr1.then((value) => {
    console.log(value);
})


let pr2 = new Promise((resolve, reject) => {
    console.log("Promise Is Pending.....");
    setTimeout(() => {
        // console.log("Promise is FulFilled");
        reject(new Error("I'm an Error"));
    }, 5000);
})

// pr2.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log("Error in Promise 2");
// })

pr2.catch((error) => {
    console.log("Error Caught")
})

console.log(pr1, pr2);