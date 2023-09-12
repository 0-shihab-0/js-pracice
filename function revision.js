// function number(){
//     console.log ("salam")
// }
// number()

// function number(){
//     console.log (2*6)
// }
// number()

// function num(n1,n2) {
//     return n1+n2
// }


// console.log(num(10,5));


//   function even(params) {
//         if (params%2===0) {
//             return true
//         }else{return false}
//   }
// console.log(even(3));


// function even(params) {
//       if (params%2===0) {
//           return true
//       }return false
// }
// console.log(even(4));


// function even(number) {
//     return number%2===0
// }
// console.log(even(3));



// function string(a){
//     return a[4]
// }
// console.log(string("ashraf khan"));

//array target

function findtarget(array,target) {
    for (let i=0;i<array.length;i++){
        if (array[i]===target) {
            return i
        }
    }
    return -1
}

const newArray=[1,2,3,4,5]

const ans=findtarget(newArray,9)
console.log(ans);

// function salam(){
//     console.log('salam');
// }

// salam()


// const salam=function(){
//     console.log("salam");
// }
// salam()

const salam=()=>{
    console.log("salam");
}
salam()

const number=function(n1,n2,n3){
    return n1+n2+n3
}
console.log(number(2,3,4));
































