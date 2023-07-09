// Alert Prompt Confirm----> functions
/*
alert()->>display a message
prompt()->> show a message, a input textbox, it returns the input on ok or, if cancel button or ESC button it returns null;
confirm()-->>show a message to confirm. returns true when ok is clicked and return false when cancel/esc is clicked
*/

// alert("You Are LoggedIn!!");
// alert("Welcome");


// let firstName = prompt("Enter Your Name");
// document.write(firstName);
// let age = prompt("Enter Your age", 22);
// document.write(age);
// if(age>18)
// {
//     document.write("You Are Above 18");
// }
// else{
//     document.write("You Are Under 18");

// }

let number = confirm("Are You sure u want to delete this number?");
if(number)
{
    document.write("Number is Deleted");
}
else{
    document.write("Number is not deleted");
}











