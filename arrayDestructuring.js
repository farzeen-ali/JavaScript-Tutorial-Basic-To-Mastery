let info = ["Farzeen", "JS", 21];
// let info = ["Farzeen", "JS", 21, ['Techzeen', 2023]];

// console.log(info);

// let name = info[0];
// let fav = info[1];
// let age = info[2];

//Array Destructuring
let[name, fav, age, extra="Extra Value"] = info;

//nested array destructuring
// let[name, fav, age, [channel, year]] = info;

console.log(name);
console.log(fav);
console.log(age);
// console.log(channel)
// console.log(year)
console.log(extra);

// function details(){
//     //....
//     return ["Farzeen", 21, "CS"];
// }

// let info = details();
// console.log(info)

// let[name,age,dep] = details();

// console.log(name);
// console.log(age);
// console.log(dep);














