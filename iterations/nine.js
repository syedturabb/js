// reduce ()

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0 )
// console.log(myTotal);

const total = myNum.reduce((acc,curr) => acc+curr,0)
console.log(total);


const shoppingCart = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "python",
        price: 299
    },
    {
        itemname: "ds",
        price: 1900
    }
]

const totalsum = shoppingCart.reduce( (acc,item) => acc+item.price,0) 

