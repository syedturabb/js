// for each loop
const coding = ["js","python", "R"]

coding.forEach( function (item) {
    console.log(item);
    
} )

coding.forEach( (val) => {
    console.log(val);
    
})

function printme(item){
    console.log(item);
    
}

coding.forEach(printme)


coding.forEach( (item,index,arr) =>{
     console.log(item,index,arr);
     
} )

const myCoding = 
[
    {
    languagename: "java",
    filename: "js"

},
{
    languagename: "java",
    filename: "js"
    
},
{
    languagename: "java",
    filename: "js"
    
}

]

myCoding.forEach( (item) => {
    console.log(item.languagename);
    
})