const user = {
    namr: "ali",
    price: 123,
    welcomeMessage:function (){
        console.log(`${this.namr}, welocme on board`);
        
    }
}

user.welcomeMessage();
user.namr="ahmed"
user.welcomeMessage();

console.log(this);


function chai(){
    console.log(this);
    
}

const chai = function(){
    let username = "mmm"
     console.log(this.username);
     
}


const chai = () => {
    let username = "mmm"
     console.log(this);
     
}