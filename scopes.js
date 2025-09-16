var c = 300
let a = 40
if(true){
let a = 10
const b =20
var c = 30    //30 will print 

}

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "ali"
    function two(){
        const web = "yt"
        console.log(username);
        
    }
    console.log(web);
    
    
}

if(true){
    const username = "ali"
    if(username==="ali"){
        const web = "netflix"
        console.log(username+web);
        
    }
}

// +++++++++++++++++++++++++++interestinng +++++++++++++++++

function print(value){
    return value+1
    console.log( );      // console will nt work after return stateent

}

const addtwo= function(value){
    return value+2
    console.log( );      // console will nt work after return stateent

}
console.log(print(19));  // output: 20
