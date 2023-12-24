/* 
    Primitives
        7 Types :
            String
            Number
            Boolean
            null    -> Empty Value, defined
            undefined -> Var created, value not defined
            Symbol
            BigInt
    Reference (Non primitive)
        Array
        Objects
        Functions
    
*/

// Symbol
const id = Symbol('123')
const newId = Symbol('123')
console.log(id === newId)
console.log(id)
console.log(newId)


// bigInt
const bigNubmer =894734957239847398572394857n

// arrays
const heros = ["Dhruv", "Nagraj", "Doga"]

// objects
let myHeros = {
    name:"Dhruv",
    age: 24,
    city: "Rajnagar"
}

// function

const myFunction = function (params) {
    return "Hello dear ", params.name
}

console.log(typeof myFunction);