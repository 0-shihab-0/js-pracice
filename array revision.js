// let fruits=["apple","mango","banana"]
// let obj=[]

// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));

// console.log(fruits[0],fruits[1]);

// const newFruits1=fruits.pop()
// const newFruits=fruits.push("graps")

// var fruits2=fruits.shift()
// var fruits2=fruits.unshift("graps")

// let gayebFruitsIs=fruits.shift()
// console.log(gayebFruitsIs);


// const array=["shihab","nihal","mukyt"]

// let array2=array.slice(0)
// console.log(array2);

// var array3=[].concat(array)
// console.log(array3);

// var array3=[...array]
// console.log(array3);


// const myArray=["ashraf","khan","shihab"]
// const yourArray=["imam","uddin","nihal"]

// const weArray=[...myArray,...yourArray]
// console.log(weArray);


// let fruits=["apple","mango","banana"]
// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toLowerCase());
// }
// console.log(fruits2);

// let i=0;
// while(i<fruits.length){
//     fruits2.push(fruits[i])
//     i++
// }
// console.log(fruits2);


let fruits=["apple","mango","banana"]

for(fruit of fruits){
    console.log(fruit);
}

for(fruit in fruits){
    console.log(fruit);
}

let name=["shihab","mukyt","nehal","ashraf"]

// const [me,he,he2]=name;

const [me,he,...he2]=name;
console.log(he2);