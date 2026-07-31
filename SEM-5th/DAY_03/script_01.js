// Var -- Redeclaration --- Reassignment -- Global | function
// let -- Not Redeclaration --- Reassignment -- Block
// Const -- Not Redeclaration --- Not Reassignment -- Block


console.log(a)
a = 45;

var a ;
a = 66;

var a ;
{
    console.log(a);
    var a = 12;
    a = 65;
    console.log(a);
    let b = 66;
}
try{
    console.log(b); // Block scope so we can't access.
}catch(err){
    console.log("B is not defined");
}

const a = 20;
try{
    a = 20;  //We can't perform reassignment in const.
    console.log(a);
}catch(err){
    console.log("A is not defiend")
}