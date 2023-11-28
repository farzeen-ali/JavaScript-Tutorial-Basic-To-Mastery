let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
        // reject(new Error("Error In Promise 2"))
    }, 1000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 4000);
})

// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })

// let promise_api = Promise.all([p1, p2, p3]);
// let promise_api = Promise.allSettled([p1, p2, p3]);
// let promise_api = Promise.race([p1, p2, p3]);
// let promise_api = Promise.any([p1, p2, p3]);
// let promise_api = Promise.resolve(12);
let promise_api = Promise.reject(new Error("Promise bhai me error hai"));
promise_api.then((value) => {
    console.log(value)
})