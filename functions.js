//functions in js 
function name(){
    console.log("Turab");
    
}

name();  // functiion
name //reference

function sum(num1,num2){
    // let result =num1+num2
    // return result;
    return num1+num2;
}

sum(3,10);

const result = sum(3,111)
console.log("Result: ",result);



function loginInUser(username){
    if(username === undefined){
        console.log("please enter any name");
        return;
    }
    return `${username} just logged in`
}
console.log(loginInUser("Turab"));

//if nothing is passed it outputs undefined



function calculateCarPrice(...num1){ //vest operator
         return num1;
}

console.log(calculateCarPrice(200,400,999));


const user = {
    username: "ahmed",
    price: 1222
}

function handle(anyobject) {
    console.log(`usernameis ${anyobject.username} and price is ${anyobject.price}`);
    
}

const myNewArray=[200,400,500,600]
function returnValue(getArray) {
        return getArray[1]
}






