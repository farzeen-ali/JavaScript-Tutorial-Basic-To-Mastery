// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Completed After 3 sec");
//         resolve(true);
//     }, 3000);
// });
// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2 is resolve");
//         }, 2000);
//     });
//     return p2;
// }).then((value) => {
//     console.log(value);
// }).then((value) => {
//     console.log("Confirmed Resolved")
// })

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1");
    }, 3000);
}).then((value) => {
    console.log(value); //1
    return value * 2;
}).then((value) => {
    console.log(value); //2
    return value * 2;
}).then((value) => {
    console.log(value); //4
    return value * 2;
})