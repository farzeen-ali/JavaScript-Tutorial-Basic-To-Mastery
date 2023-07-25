/********************Global Vs Local Variables************
Global Variable---> a variable which is "declared outside" of the functions in a program and can be accessed by any of the functions.

Local Variable---> a variable which is "declared inside" a specific function and can only be accessed the function in which it is declared.
*/

let text = "Me Hoon Global Variable"; //--->Global Variable
// let text = "Farzeen";---->error
function display()
{
    let message = "Good Morning"; //local variable
    console.log(message);
    // console.log(text);

}

function add()
{
    let message = "Me doosra local variable hoon"; //local variable
    console.log(message);
}

display();
add();

// console.log(message);

// console.log(text);