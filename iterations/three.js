// for of

const arr=[1,2,3,4,5]



for (const val of arr) {
    console.log(val);
    
}

const greeting = "Hello"
for (const greet of greeting) {
    console.log(`each charis ${greet}`);
    
}


// Maps   

const map = new Map()
map.set('pk', "pakistan")
map.set('ir',"iran")


console.log(map);

for (const [key,value] of map) {
    console.log(key , ':-', value);
    
}


const myobject = {
    'game1': 'nfs',
    'game2': 'cod'
}

for (const [key,value] of myobject) {
      console.log(key , ':-', value);
}

// maps are iteratable 