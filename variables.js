const accountId = 1023455
let accountEmail = "turabhaiderpk@gmail.com"
var accountPassword = "123abcd"

// accountId = 2   const cannot be changed not allowed

console.log(accountEmail);

// prefer not to use var because of issue in block and functional scope 
console.table([accountEmail,accountId,accountPassword])