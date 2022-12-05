// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

interface User {
    Login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
}

interface Admin extends User {
    role: string,
}


// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

function login(user: { login: string, password: string }): void {

    if (user.login && user.password) {
        console.log("Welcome on the page");
    }
}
 

