// if

// const temperature = 40

// if(temperature === 40) {
//     console.log("Temperature is equal to 40")
// }
// else {
//     console.log("Temperature is not equal to 40")
// }

// console.log("Executed")


// if(2 === 2) {
//     let power = "fly"
//     console.log(`The power is ${power}`)
// }

// console.log(power)


const balance = 1000;
// This is an unreadable code , Don't write this type of code
// if(balance > 500) console.log("Yes"), console.log("Yes again");

// if(balance < 500) {
//     console.log("Less than 500")
// }
// else if(balance < 750) {
//     console.log("Less than 750")
// }
// else if(balance < 900) {
//     console.log("Less than 900")
// }
// else {
//     console.log("Less than 1200")

// }

const userloggedin = true;
const debitcard = true;
const userLoginFromGoogle = false;
const userLoginFromEmail = false;

// if(userloggedin && debitcard && 3 === 3) {
//     console.log("user logged In")
// }

// if(userLoginFromGoogle || userLoginFromEmail || debitcard) {
    // If any of the given condition is true then the scope code is executed
//     console.log("user logged In")
// }

/*
const month = 3;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Default case matched")
        break;
}
*/

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
/*
const userEmail = "Adarsh.Ai"
if(userEmail) {
    console.log("User have Email")
}
else {
    console.log("User does not have Email")
}
*/

// Truthy Values
// "0", 'false', " ", [], {}, function() {}

// const usermail = []
// if(usermail.length === 0) {
//     console.log("Array is Empty")
// }


const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    // console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined
let var1;
// var1 = 5 ?? 10;
// var1 = null ?? 10;
// var1 = undefined ?? 10;
var1 = null ?? 5 ?? 10;

console.log(var1);

// Ternary Operator
// Condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
