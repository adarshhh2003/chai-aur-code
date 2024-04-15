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
console.log(loginUserMessage("Patel"))