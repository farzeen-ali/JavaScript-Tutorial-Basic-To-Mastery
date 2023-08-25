/* *********** Nested Object In JavaScript ******************
An Object that is placed inside another object
it is just like box inside another box, where each box holds related information together
*/

let student = {
    id : 1,
    personalInfo : {
        firstName : "Farzeen",
        lastName : "Ali",
        contactInfo : {
            email : 'farzeen@gmail.com',
            phone : '123-456-789'
        }
    },
    addressInfo : {
        city : 'Karachi'
    }
}

// console.log(student)
// console.log(student.personalInfo);
// console.log(student.personalInfo.firstName);
// console.log(student.personalInfo.contactInfo.email);
console.log(student.addressInfo.city);