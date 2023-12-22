let data = `{
    "name" : "Farzeen",
    "age" : 22,
    "is_employee" : true,
    "passport" : null,
    "language" : ["JavaScript","c++","Java","Python"],
    "contact" : {
        "phone_number" : 123456789,
        "email" : "farzeen@gmail.com"
    },
    "students" : [
        {
            "name" : "Farzeen",
            "class" : "Nine"
        },
        {
            "name" : "Ali",
            "class" : "Eight"
        },
        {
            "name" : "Huzaifa",
            "class" : "One"
        }
    ]
}`;

let dObj = JSON.parse(data);
// console.log(dObj)
console.log(dObj['name']);
console.log(dObj['age']);
console.log(dObj['is_employee']);
console.log(dObj['language']);
console.log(dObj['language'][2]);
console.log(dObj['contact']);
console.log(dObj['contact']['email']);
console.log(dObj['students'][0]['name'])
console.log(dObj['students'][2]['name'])
console.log(dObj['students'][2]['class'])