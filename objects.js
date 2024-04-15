// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Adarsh",
    "full name": "Adarsh Patel",
    [mySym]: "key1",
    age: 20,
    email: "adarsh@google.com",
    location: "bhopal",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])
// console.log(jsUser["full name"])

jsUser.email = "adarsh@microsoft.com"
// Object.freeze(jsUser)
// jsUser.email = "adarsh@gmail.com"

// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello JS User")
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())