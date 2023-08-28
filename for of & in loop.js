//of loop
const divisions=["dhaka","chattogram","sylet"]

for(let division of divisions){
    console.log(division);
} 

//in loop

for(let division in divisions){
    console.log(division);
    console.log(divisions[division]);
}