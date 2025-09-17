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