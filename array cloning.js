// 1st method 

const array1=["math","physics","chemistry"]
const array2=array1
console.log(array1===array2);

array1.push("biology")


const arr1=["math","physics","chemistry"]
const arr2=["math","physics","chemistry"]
console.log(arr1===arr2);
arr1.push("biology")

// 2nd method 

const name=["ashraf","khan","shihab"]
const title=name.slice()

name.push("myself")
console.log(name);
console.log(title);

// 3rd method 
const place=["chandgaon","bohoddarhat","chandgaon"]
const living=[].concat(place)

place.push('bakalia')
console.log(place);
console.log(living);

//4th method:spread operator

const transport=["cycle","bike","car"]

const t2=[... transport]

console.log(transport);
console.log(t2);

//slice is fastest but people use spread most