document.cookie = "item=phone";//create cookie
document.cookie = "item=phone,headphones";//update cookie

//read a cookie
let cocomo = document.cookie;

console.log(cocomo);

//delete a cookie

document.cookie = "item=phone,headphones; expires=Thu, 11 Nov 2023 12:00:00 UTC";