let key = prompt("Enter Key: ")
let value = prompt("Enter Value: ")

//setItem
localStorage.setItem(key, value);

//getItem
console.log(`The value ${key} is ${localStorage.getItem(key)}`)

//removeItem
if(key == "password"){
    localStorage.removeItem(key);
}

//clear
if(key == "delete"){
    localStorage.clear();
}

//length
console.log(localStorage.length)

//index
console.log(localStorage.key(2))
