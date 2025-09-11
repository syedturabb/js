// objects

//object literals

const mysym = Symbol("key1")
const Jsuser = {
    name: "Hqider",
    "full": "turab",
    age: 29,
    [mysym] : "sym1",
    location: lahore,
    email: "@gmail.com",
    isLoggedIn : false,
}
console.log(Jsuser.age);
console.log(Jsuser["full"]);

Jsuser.email = "turabhaider@gmail.com"  //chnage object

Object.freeze(Jsuser)  //doesnt allow further chnages

Jsuser.greeting = function(){
    console.log("Helo G!");

}
console.log(Jsuser.greeting());

Jsuser.greetingtwo = function(){
    console.log(`Helo G! ${this.name}`);

}
console.log(Jsuser.greetingtwo());


