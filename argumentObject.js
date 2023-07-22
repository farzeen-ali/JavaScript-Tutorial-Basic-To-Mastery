/*******************Argument Objects**********************
an array-like object accessible inside functions that contain the values of the arguments 
passed to that function.
*/
function add()
{
    // console.log(arguments);  
    // console.log(arguments.length);  
    // console.log(arguments[2]);  

    if(arguments.length == 0)
    {
        console.log("The Sum is 0 because no argument is passed");
    }
    else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++)          
        {
            sum+= arguments[i];   //sum = sum + arguments[i]; 0+2
        }
        console.log("The Sum is " + sum);
    }
}
// add();
// add(2);
// add(3,4,5);
// add(2,3,4);
// add(1,2);

let addition = add;  //assign function to variable 
addition(1,2,3,4);