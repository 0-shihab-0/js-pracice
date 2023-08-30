  const person={
    name:"shihab",
    age:20,
    Hobbies:["sleeping","coding","reading"]
  }

  //for in loop

  for(let keys in person){
    console.log(keys);
  }

  for(let keys in person){
    console.log(person[keys]);
  }
  for(let keys in person){
    // console.log(`${keys} : ${person[keys]}`);
    console.log(keys,":",person[keys]);
  }



  //object.keys

console.log(typeof Object.keys(person));
console.log(Array.isArray (Object.keys( person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}
