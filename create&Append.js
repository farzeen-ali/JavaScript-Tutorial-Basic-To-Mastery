// let element = document.getElementById('me');
// let heading = document.createElement("h1");
//how to add class and id
// heading.className = "js course";
// heading.id = "h_id";

//Append Text using method
// let text = document.createTextNode("This is JavaScript Tutorial");
// heading.appendChild(text);
//Append Text using property
// heading.textContent = "This is The Techzeen";
// element.appendChild(heading);

//Append on body tag
// document.body.appendChild(heading);

//reading a text from an element
// let para = document.getElementById("para");
// console.log(para.textContent);

let item = document.getElementById('items');
let elementItem = document.createElement('li');
elementItem.textContent = "Item From Dom Manipulation";
item.appendChild(elementItem);