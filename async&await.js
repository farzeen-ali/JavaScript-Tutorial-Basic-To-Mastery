async function say(){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1 Done!!!");
        }, 3000);
    })
    // console.log(p1)

    // p1.then((val) => {
    //     console.log(val);
    // })

    //Do this
    let a = await p1;
    console.log(a);

}

say();