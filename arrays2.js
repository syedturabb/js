const marvel= ["thor","ironman","spider"]
const dc = ["superman", "flash","batman"]

marvel.push(dc)  
console.log(marvel);  //array in an array

const all = marvel.concat(dc);     
console.log(all);

const allHero = [...marvel,...dc]   //spread
console.log(allHero);


const another_array = [1,2,3,4,5,[6,7,8],[9,10]]
const real_another_aray= another_array.flat(Infinity)
console.log(real_another_aray);

//isArray    , //from  make an array  // 

let score1= 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));  // [10,20,30]



