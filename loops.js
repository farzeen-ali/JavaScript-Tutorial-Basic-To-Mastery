/*
**********************************Loops In JavaScript*******************************************
A loop is used for executing a block of statements repeatedly until a particular condition is satisfied.
1)While Loop:
	Syntax:
		while (condition) 
		{
            body of the loop
		}
        
2)Do-While Loop:
    the body of do while loop is executed "once before the condition is checked".
        Syntax:
		do 
		{
            body of loop;
		}
		while (condition);
        
3)For Loop: 
        Syntax:
            for (initialization; condition; update) 
            {
                body of-loop 
            }
*/

//While loop:

let number = 0;

// while(number<=10)
// {
//     document.write(number);
//     // number = number +1;
//     // number+=1;
//     number++;
// }
// number = 10
// while(number>0)
// {
//     document.write(number);
//     // number = number -1;
//     // number-=1;
//     number--;
// }


//Do While Loop:

// let message = 0;

// do{
//     document.write(`Jalwa Hi Do While Loop Ka ${message}`);
//     message++;
// }
// while(message>10);
// while(message<10);

// while(message>10)
// {
//     document.write(`Hello ${message}`);
// }


//For Loop

// for(let number= 0; number<10; number++)
// {
//     document.write("Hi ");
// }


// let sum = 0;

// for(let natural = 1; natural<=100; natural++)
// {
//     sum+=natural;   //sum = sum + natural
// }
// document.write("The Sum Is: " + sum);


// let sum = 0;

// for(let natural = 100; natural>=1; natural--)
// {
//     sum+=natural;   //sum = sum + natural
// }

// document.write("The Sum Is: " + sum);

// let sum = 0;
// let natural = 1;

// while(natural<=100)
// {
//     sum+=natural;   //sum = sum + natural
//     natural++;
// }
// document.write("The Sum Is: " + sum);
// let sum = 0;
// let natural = 101;

// do
// {
//     sum+=natural;   //sum = sum + natural
//     natural++;
// }while(natural<=100);
// document.write("The Sum Is: " + sum);