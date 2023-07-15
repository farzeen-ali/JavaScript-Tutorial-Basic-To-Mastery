// *********Array Operations****************************

// let teams = ["Pakistan","India","Bangladesh","NewZealand"];

// console.log(teams.sort());
// console.log(teams.length);

// teams.push("England");
// teams.unshift("England");
// teams.pop();
// teams.shift();
// teams.splice(2,1);
// teams.splice(2,2);
// teams = [];
// teams.length = 0;
// let index = teams.indexOf("India");
// console.log(teams);
// console.log(index);

// let teams = "Australia";

// console.log(Array.isArray(teams));


// let message = "Hi I'm Farzeen Ali and This is My Youtube channel";

// let splitting = message.split(" ");

// console.log(splitting);

// let arr1 = ["Farzeen", "Ali", "Sara"];
// let arr2 = ["Ayesha", "Ahsan", "Huzaifa"];

// // let newArray = arr1.concat(arr2);
// let newArray = arr2.concat(arr1);
// console.log(newArray);



/*     0         1
    0["Maths","Algebra"],
        0         1
    1["Bio","Zology"],

        0         1
    2["Java","JavaScript"]
*/

// let books = [
//     ["Maths","Algebra"],
//     ["Bio","Zology"],
//     ["Java","JavaScript"],
//     ["C","C++"],
// ];

// let arr = books[1][0];
// let arr = books[2][1];
// let arr = books[3][1];

// console.log(arr);


let teams = ["Pakistan","India","Bangladesh","NewZealand"];

for (let index = 0; index < teams.length; index++) {
    console.log(`Elements of Teams Array are: ${index} of ${teams[index]}`);
    
}





