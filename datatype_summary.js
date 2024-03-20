//  Primitive

// 7 Types : String, Number, Boolean, NULL, Undefined, Symbol, BigInt

const value = 34
const anotherValue = "123adarsh"

let isLoggedIn = false

const outside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

// const bigNumber = 2987582675267345n



// Reference (Non-primitive)

// Array, Objects, Functions

const heroes = ["shaktiman","dada","daus"];
let myObj = {
    name: "Adarsh",
    age: 22,
    address: "gadarwara",
    email: "ap5892842"
};

const myFunction =function(){
    console.log("Hello world");
}

console.log(typeof outside)
console.log(typeof myFunction)
console.log(typeof heroes)
console.log(typeof id)