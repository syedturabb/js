const myobject = {
    js : 'javas',
    cpp: 'c++',
    rb: 'ruby'
}

 // for  objects use for in

for (const key in myobject) {
   console.log(`${key} short is for ${myobject[key]}`);
   
    
}

const pro = ["js","cpp","rb"]

for (const key in pro) {
   console.log(pro[key]);
   
    
}

