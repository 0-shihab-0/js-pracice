const array=["ashraf","shihab"]

const ar1=array[0]
const ar2=array[1]

console.log(ar1);
console.log(ar2);


//destucture method

//1
let [Ar1,Ar2]=array
console.log(Ar1);
console.log(Ar2);

//2

var ar=["nihal","mukyt","shihab","ashraf"]

var  [name1, ,name2]=ar
console.log(name1);
console.log(name2);
let newar=ar.slice(1,4)
console.log(newar);


//3
var ar=["nihal","mukyt","shihab","ashraf","khan"]

var  [name1,name2,name3,...otherName]=ar
console.log(otherName);