
// const tinder = new Object()    //singleton obj
const tinder = {}                 //non singleton obj
// console.log(tinder);

// tinder.id= "abc123"
// tinder.name= "ali"
// tinder.isLgged= false

const regularuser ={
    email:"@gmail.com",
    fullname:{
        userfullname:{
            firstname: "ali",
            lastname: "haider"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj5 = Object.assign({},obj1, obj2,obj4)
console.log(obj3);


const users={
    name: "usman",
    age: 21
}

const course = {
    coursename: "js",
    price: "999",
    courseIns: "hitesh",
}
// course.courseIns

const {courseIns : ins} = course

// console.log(courseIns);
console.log(ins);


const navbar = ({compnay}) => {
                                      // object destructing
}

navbar(compnay = "ali")


// {
//     name: "ali",
//     price: "free",   // api's through objects 

// }

// {
//     {},
//     {},               // apis through arrays
//     {}
// }




