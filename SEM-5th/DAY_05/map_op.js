const arr = [1,2,3,4,5,6,7,8,9,10]

// arr.map((data)=>{
//     console.log(data);
// })

const multipleOfThree = arr.map((data)=>data*3)
console.log(multipleOfThree)

const divisiablebythree = arr.filter((data)=>data%3==0)
console.log(divisiablebythree)

const fistdivisiablebythree = arr.find((data)=>data%3==0)
console.log(fistdivisiablebythree)

const sumofarray = arr.reduce((data, acc)=>{
    acc+=data;
    return acc;
}, 0);

console.log(sumofarray)