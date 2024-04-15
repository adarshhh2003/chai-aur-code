// Functions

function sayMyName() {
    console.log("A")
    console.log("D")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2,9);
// console.log(result)

function loginUserMessage(userName = "Sam") {
    if(userName === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("adarsh"))
// console.log(loginUserMessage("Patel"))

// ++++++++++

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    name: "Adarsh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    name: "Sam",
    price: 399
})

const myNewArray = [100, 300, 500, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,4500]))