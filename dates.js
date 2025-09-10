let myDate = new Date();
console.log(myDate.toString());     //shows current date time
console.log(myDate.toDateString);
console.log(myDate.toLocaleString);   
console.log(typeof myDate);  //object

// let date2 = new Date(2025, 9,10, 5 ,3)
// let date2 = new Dat("2023-01-17")
// let date2 = new Date("09-21-2034")


console.log(date2.toDateString());    

let date3 = new Date()
console.log(date3.getDate());
console.log(date3.getMonth()+1);


date3.toLocaleString('default', {
    weekday:"long"
})

