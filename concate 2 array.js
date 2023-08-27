//method 01

const a=[1,2,3]

const b=a.slice().concat([5,6,7])
console.log(b);

//method 02
const c=[].concat(a,[8,9])

console.log(c);

//method 03

const d=[...c,...a]

console.log(d);