let element = document.getElementById("box");

//find className of an element
// console.log(element.className);

//how to add class using className Property
// element.className += " color";

//how to check className list of an element
// console.log(element.classList);

// for(let style of element.classList){
//     console.log(style);
// }

//how to add a className
// element.classList.add("color");

//how to remove a className
// element.classList.remove("square");

//how to replace a className
// element.classList.replace("square","color");

//how to check existence of a class
// let result = element.classList.contains("color");
// console.log(result);

//toggle class add/remove
element.classList.toggle("color");
