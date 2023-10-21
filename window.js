//innerWidth innerHeight
// console.log(window.innerWidth);
// console.log(window.innerHeight);

//outerWidth outerHeight
// console.log(window.outerWidth);
// console.log(window.outerHeight);

//open new window
let element1 = document.getElementById("btn-1");
let element2 = document.getElementById("btn-2");
let element3 = document.getElementById("btn-3");

let url = "https://www.yahoo.com";
let features = "height=500, width=500";

let openWindow;

element1.addEventListener('click', function(){
    //first parameter = url, second parameter = name, third parameter = features
   openWindow = window.open(url, 'web', features);
})

//change url
element2.addEventListener('click', function(){
    window.open('https://www.google.com', 'web');
})
//close window
element3.addEventListener('click', function(){
    openWindow.close();
})











