/*
syntax of if and else:
if(condition)
{
    block of code to be executed if the above condition is true
}
else{
    block of code executed if the above condition is false
}


Nested If: 
if(condition)
{
    if(condition)
    {
        code
    }
    else{
        code
    }
}
else{
    block of code executed if the above condition is false
}

If Else If Ladder:

if(condition)
{
    block of code to be executed if the above condition is true
}
else if(condition)
{
    block of code to be executed if the above condition is true
}
.
. 
. 
else{
    block of code executed if the above condition is false
}

Ternary Operator:
variable (condition) ? (output if the value is true) : (output if the value is true)

Nullish Coalescing Operator:
syntax:
valueToCheck ?? defaultValue;
*/

let number = 4;

// if else

// if(number>2)
// {
//     document.write("Number is greater than 2");
// }
// else{
//     document.write("Number is less than 2");
// }

number = 2;

//nested
// if(number>3)
// {
//     if(number>7)
//     {
//         document.write("Number is greater than 3 and 7");
//     }
//     else
//     {
//         document.write("Number is less than 7");
//     }
// }
// else{
//     document.write("Number is less than 3");

// }


// if else if ladder

// number = -10;

// if(number>0)
// {
//     document.write("Number is positive");
// }

// else if(number == 0)
// {
//     document.write("Number is Zero");

// }

// else{
//     document.write("Number is Negative");

// }

// number = 8;
// number = 6;
// // number = 4;
// number = -4;


// if(number>0 && number<5)
// {
//     document.write("If Condition");
// }

// else if(number>5 && number<7)
// {
//     document.write("Else if 1 Condition");

// }

// else if(number>7 && number<9)
// {
//     document.write("Else if 2 Condition");

// }

// else{
//     document.write("Me hoon Else Bhai");

// }

// //Ternary Operator
//  let result = 0; //1 -> pass 0-> fail

// let status = result == 1 ? "Pass" : "Fail";
// document.write(status);

// Nullish
// let firstName = null;

// let defaultName = "Farzeen";
 
// let result = firstName  ?? defaultName;

// document.write(result);










































