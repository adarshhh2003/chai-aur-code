const user = {
    username: "Adarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)   
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// 'this' keyword will not work in the function it will only work on objects
// function chai() {
//     let username = "Adarsh";
//     console.log(this.username)
// }
// chai();

// const chai  = function() {
//     let username = "Adarsh"
//     console.log(this.username)
// }
// chai();

// const chai = () => {
//     username = "Adarsh"
//     console.log(this)
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) => ({username: "Adarsh"})

console.log(addTwo(3, 5));