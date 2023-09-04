// //shift-push

// const name=["shihab","nihal"]

// // name.push("mukyt");
// // const mname=name.pop();
// // console.log(name);
// // console.log(mname);


// name.shift()
// console.log(name);

// name.unshift("shihab")
// console.log(name);


 
//array cloning

// let a=["s","b","c"]

// let b=a

// a.push(1)
// console.log(a===b);
// console.log(b);
// console.log(a);

// let a=["s","b","c"]


// const c=a.slice(0)


// console.log(a===c)


// let b=[].concat(a);


// console.log(b);

// let c=[...a]

// console.log(c);

// let a=[1,2,3]
// let b=[5,6,7]

// let c=[...a,...b]

// console.log(c);

// const name=["shihab","nihal","mukyt"]

//  `   

// for(let i=0;i<name.length;i++){
//     console.log(name[i]);
// }


// let title=[]

// for(let i=0;i<name.length;i++){
//     title.push(name[i])
   
// }
// console.log(title);

const names=["shihab","nihal","mukyt"]

// let i=0
// while(i<name.length){

//     console.log(i);
//     i++
// }

// for(name of names ){
//     console.log(name);
// }
// for(name in names ){
//     console.log(names[name]);
// } 

 
// const array1=["ashraf","khan"]

// const myar1=array1[0]
// const myar2=array1[1]

// console.log(myar1);
// console.log(myar2);


// const [name1,name2]=array1
// console.log(name1);
// console.log(name2);


// const person={
//     name:'shihab',
//     gender:"male",
//     age:20
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);

// person.cousins=["nihal","mukyt"]

// console.log(person.cousins);

// const person={
//    "person name":"shihab",
//     "gender":"male"
// }
// // console.log(person."person name");
// console.log(person.gender);

// const person={
//     name:'shihab',
//     gender:"male",
//     age:20
// }

// for(element in person){
    // console.log(person[element]);
    // console.log(element,":",person[element]);
    // console.log(`${element}:${person[element]}`)
    // console.log(object.element(person));
// }

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// const name1="shihab"
// const name2="nihal"

// const study1="honours"
// const study2="HSC"

// const obj={
//     [name1]:study1,
//     [name2]:study2
// }
// console.log(obj);


// const obj1={}
// obj1[name1]=study1
// obj1[name2]=study2

// console.log(obj1);


// const alpha=[..."abc"]
// console.log(alpha);

// const alpha1=[..."123"]
// console.log(alpha1);

// const alpha2=[...123]
// console.log(alpha2);


const person={
    name:"shihab",
    gender:"male",
    age:20
}

const person1={
    name1:"khan",
    gender1:"male",
    age1:20
}

const newPerson={...person,...person1}
console.log(newPerson);













