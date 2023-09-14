
// Make a user class with email, username and password properties
// use the class to create 3 users that have different information.


class User {
    constructor(email, userName, password) {
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
};
const newUser = new User("jan@gmail.con", "JanJan", "12345");
const user2 = new User("Tewo@gmail.con", "tean", "12");
const user3 = new User("me@mewo.com", "You", "45");
