// let list = document.getElementById("items");

// let item = document.createElement("li");
// item.textContent = "Item From DOM";

// let position = list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

// list.insertBefore(item, position);

let element = document.body;  //parent selected

let newElement = document.createElement("h1");
newElement.textContent = "TechZeen";

// element.appendChild(newElement)

let list = document.getElementById('items');

element.insertBefore(newElement, list);