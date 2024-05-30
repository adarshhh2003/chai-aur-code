// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encriptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

// const chai = new User("adarsh", "adarsh@email", '123')
// console.log(chai.encriptPassword());
// console.log(chai.changeUsername());

// Behind the scene

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

user.prototype.encriptPassword = function() {
    return `${this.password}abc`
}

const chai = new user("adarsh", "adarsh@email", '123')
console.log(chai.encriptPassword());
console.log(chai.changeUsername());