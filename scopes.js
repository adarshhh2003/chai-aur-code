var c = 300

let a = 400

if(true) {
    let a = 10
    // console.log("Inner: ",a)

    const b = 20
    var c = 30
}

// for(let i=0; i<array.length; i++) {
//     const element = array[i];
// }

// console.log(a)
// console.log(b)
// console.log(c)

/*function one() {
    const username = "Adarsh"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}   

one()     */

if(true) {
    const username = "Adarsh"
    if(username === "Adarsh") {
        const lastname = " Patel"
        console.log(username + lastname)
    }
    // console.log(lastname)
}

// console.log(username)

// +++++++++++ Interesting +++++++++++

console.log(addOne(5))

function addOne(num) {
    return num + 1
}

// This will give you errror because of holding the function
// addTwo(7)

const addTwo = function(num) {
    return num + 2
}
