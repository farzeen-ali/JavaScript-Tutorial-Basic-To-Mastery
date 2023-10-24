//Properties of Location Object
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);

//redirect
function go(){
    // window.location = "https://www.google.com";
    // location.href = "https://www.google.com";

    //location.assign("https://www.google.com"); //add in history
   //location.replace("https://www.google.com"); //not add in history

   //reload webpage
   location.reload();
}