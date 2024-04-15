// This is an singleton Object
// const tinderUser = new Object()

// This is  non singleton Object
const tinderUser = { }
tinderUser.id = "123abc"
tinderUser.name = "shanky"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "anuj@email.com",
    fullname: {
        userfullname: {
            firstName: "Adarsh",
            lastName: "Patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    { },
    { },
    { },
    {id: "223nk",
    name: "adarsh"
        },
        {id: "223nk",
    name: "adarsh"
        }
]

user[4].id

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLogged"))