let btn = document.getElementById("btn");

function firstClick(){
    console.log("1st Time Click");
}
function secondClick(){
    console.log("2nd Time Click");
}

btn.addEventListener('click', firstClick);
btn.addEventListener('click', secondClick);

btn.removeEventListener('click',secondClick);