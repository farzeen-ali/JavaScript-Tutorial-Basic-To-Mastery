// window.addEventListener('scroll', function(){
//     console.log("Scroll Event Listened!!!");
// })


// window.addEventListener('wheel', function(event){
//     if(event.deltaY < 0){
//         console.log("Scrolling Up")
//     }
//     else if(event.deltaY > 0){
//         console.log("Scrolling Down")
//     }
// })

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 250){
        document.body.style.background = "aqua";
    }
    else{
        document.body.style.background = "white";
    }
})