class user {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(`Username is ${this.username}`);
    }
}


class teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addcourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("adarsh", "adarsh@email", "123abc")
chai.addcourse();

const masalachai = new user("masalachai")
masalachai.logme();


console.log(chai instanceof teacher);