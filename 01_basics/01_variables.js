const accountId = 144553
let accountEmail = "test@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "423432525"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Prefer not to use var 
// because of issue in block scope and functional scope