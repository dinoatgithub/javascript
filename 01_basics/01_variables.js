const accountId = 14553                             // | delcare constant
let accountEmail = "someone@somewhere.com"          // | solves the scope issue | always use this one
var accountPassword = "1234"                        // | has the issue of block and functional scope | never use this one
accountCity = "Meerut"                              // | defined variable without a keyword
let accountCountry                                  // | undefined variable with a keyword

//accountId = 2 | not allowed

/* 
Multi line
comment
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry])