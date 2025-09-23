const myNum = [1,2,3,4,5,6,7,8]

// const newnum=myNum.map( (num) => num+10)

 /// chaining
const newNum = myNum
.map((num) => num*10)                 
.map((num) => num+1) 
.filter((num) => num>=40)                        //in chaining , seconds gets value from firts
console.log(newnum);



