//arrays

const arr = [0,1,2,3,4,5]
console.log(arr[4]);

const heros = ["turab", "haider"]

const arr2 = new Array(2,4,6,8,11)


//Array Methods

arr2.push(6)   // add in a array

arr2.pop()    //remove from an array

arr2.unshift(5)   //add at the start   

arr2.shift()   //removes at the start   

console.log(arr2.includes(9)); //check for that no in array  
console.log(arr2.indexOf(11)); //return index

const newAr1 = arr2.join() //converts to string

// slice    , splice

console.log("A" , arr2);

const myn1 = arr2.slice(1,3)
const myn2 = arr2.splice(1,3)


