//Datatypes    1. Primitive (call by value)      2. Non-Primitive (call by refernece)

// primitive 7 types : string , number , boolean, null, undefined, symbol, BigInt


const score = 100;
const score1 = 100.3

const isLogged = true
const outsideTemp = null
let userEmail= undefined 

const id = Symbol('123')
const bigNum = 234567888776652n

//summary

// reference (non primitive) : Arrays , objects , functions   //typeof functions

const hero = [superman, spiderman, thor];

let obj = {
    name:'t',
    age : 20
}

const myFunc = function(){
     console.log("hello world");     
}

