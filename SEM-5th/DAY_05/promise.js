const mypromise = new Promise((resolve, reject)=>{
    let age=17;
    if(age>18){
        resolve("Eligiable for vote")
    }else{
        reject("Not eligiable for vote")
    }
})

console.log(mypromise)

// Use of .then() and .catch() Method 1

// mypromise
//     .then((msg)=> console.log(msg))
//     .catch((error)=> console.log(error));

// Use of asyn and await method 2



const CheckEligiablity = async () =>{
    try{
        const msg = await mypromise;
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}

CheckEligiablity();