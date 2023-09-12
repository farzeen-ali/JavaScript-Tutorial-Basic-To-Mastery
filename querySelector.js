// let element = document.querySelector('h3.heading');
let element = document.querySelectorAll('h3.heading');
console.log(element);
// element.innerHTML = "Hi";

for(let i = 0; i < element.length; i++){
    element[i].innerHTML = "Farzeen";
}