let parent = document.getElementById("items");

let cloneElement = parent.cloneNode(true);

// console.log(cloneElement)

cloneElement.id = "my-id";
document.body.appendChild(cloneElement);