const person={
    name:"shihab",
    gender:"male",
    age:19
}

// const {name,gender}=person
// console.log(name);
// console.log(gender);

const {name:var1,gender:var2}=person
console.log(var1);
console.log(var2);

let {name,...a}=person
console.log(person);




