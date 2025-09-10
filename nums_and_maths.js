const score = 10
console.log(score);

const balance = new Number(100)   //compiler specically defines
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));  //10.00

const otherNum=123.8934

console.log(otherNum.toPrecision(4));

const hundred = 100000
console.log(hundred.toLocaleString());


//++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);  //object
console.log(Math.abs(-4));  // 4
console.log(Math.round(4.7));  //5

//math.ceil => top     , math.floor => bottom

console.log(Math.min(1,4,7,8,3));  // 3
console.log(Math.max(2,5,8,1,6));  // 8

console.log(Math.random());  //default 0 to 1

console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.random() * (max - min +1) +min)



  







