interface User {
    readonly email: string;    
    readonly login: string;
    password: string;
}


interface User {
    isOnline?: boolean;    
}

// interface Window {
//     isAuth?: boolean;
// }

// window.isAuth

interface Person {
    readonly firstName: string;
    lastName: string;
    phone?: string;
    yearOfBirth?: number;
}

interface Employee extends User, Person {
    contactStart: Date;
}


export interface Developer extends Employee {
    skills: string[];
    level?: 'junior' | 'middle' | 'senior'
    say(): void;
    code?: (arg: string) => string;
}

// class MyDeveloper implements Developer {
//     say() {

//     }
// }
