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

//nullish coalescing operator ?? null : undefined

let val1 ;
val1= 5 ?? 10   // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20   // 10 {first comes}

