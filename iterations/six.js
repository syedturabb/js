const coding = ["js","python", "R","java"]

//for each doesnot return value   

const val = coding.forEach((item)=>{
    return item
})
console.log(val);


const mynum = [1,2,3,4,5,6,7,8,9]


const newNum = mynum.filter((num) => num > 5 )  

//   const newNum = mynum.filter((num) => { 
//     return           num > 5 }
//  )               
//filter return a value , condtion is must

// mynum.forEach((num) =>{
//     if(num>4){
//         newNum.push(num)
//     }
// })



let userbooks = book.filter((bk) => bk.publish >= 2000)
let userbooks = book.filter((bk) => {
    return bk.genre === 'History' && bk.edition < 2000
})



