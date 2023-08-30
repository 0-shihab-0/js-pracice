//Arrays are good but not sufficient in real world
// Objects store key values point
// objects don't have index
// objects is a reference type


const person={name:'shihab',age:20}
console.log(person);

//how to access data from objects
console.log(person.name);
console.log(person.age);

//another method
console.log(person["age"]);
console.log(person["name"]);

//how to add key value pair to object
person.gender="male"
console.log(person.gender);

//Add array in object

const myself={
    Name:"shihab",
    Age:19,
    Hobbies:["sleeping","coding","reading"]
}
console.log(myself);

//deference between dot and bracket notation

const himself={
    name:"shihab",
    age:18,
    "his Hobbies":["sleeping","coding","reading"]
}

console.log(himself ["his Hobbies"]);

//key method
const key="gmail"
// himself.key="0.akshihab.0@gmail.com"

// console.log(himself); 

himself[key]="0.akshihab.0@gmail.com"

console.log(himself);









