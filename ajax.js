/* ************** Ajax In JavaScript *******************
*) AJAX stands for ---> Asynchronous JavaScript And XML
*) Definition --> technique for creating fast and dynamic web pages
*) How it works --> allows data to be exchanged with a web server in the background, enabling parts of a web page to be updated without requiring a full page reload.

*) what is XMLHttpRequest ---> XMLHttpRequest is a JavaScript object that provides an easy way to make asynchronous HTTP requests to a server. It allows you to send and receive data between a web browser and a web server without having to reload the entire page. 

*) 5 steps :-
    0 Step --> request not initialized
    1 Step --> server connection established
    2 Step --> sent request 
    3 Step --> processing request
    4 Step --> request finished and response is ready

*) Status Code---> 200(ok), 404(not found)....
*) ResponseText or ResponseXML --> type of response 
*/

function loadData(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.response);
            document.getElementById('heading').innerHTML = this.response;
        }
        else if(this.readyState == 4 && this.status == 404){
            // console.log(this.response);
            document.getElementById('heading').innerHTML = this.response;
        }
    }


    xhttp.open("GET","../file.txt",true);
    // xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.send();
}



















