const useremail = "hai.ai"

if(useremail){
    console.log("he has email");
    
}
else{
    console.log("no email");
    
}

//falsy value :
//false , 0 , -0 , BigInt 0n , "" , null, undefined , NaN


// truthy valuse :
// "0" , 'false' , " " , [] , {}, function() {}

const emptyobj = {}

if( Object.keys(emptyobj).length === 0){
    console.log(("object is empty"));
    
}