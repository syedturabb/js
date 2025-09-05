let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan 
// true => 1 , false => 0

let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// Operations

let value =4
let negValue=-value

console.log(negValue);  //-4

console.log(3**2);

let str = "turab"
let str2= "haider"

let str3 = str + str2
console.log(str3); // turab haider

console.log("1" + 2);       //12
console.log("1" + 2 + 2);    //122 
console.log(1 + 2+"2");     //32

// use brackets for clear code, readability

let a = 1
++a;  // prefix
a++; //postfix

