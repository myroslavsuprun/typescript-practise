type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';

// all variants
type Union3 = Union1 | Union2;

// a | c
type Union4 = Union1 & Union2;

type Union5 = { a: string; b: string, c: number } & { a: string, t: boolean, z: null}

// const example: Union5 = {

// }

type User = {
    readonly email: string;
    readonly login: string;
    password: string;
}

export type Person = {
    readonly firstName: string;
    lastName: string;
    phone?: string;
    yearOfBirth?: number;
}

type Employee = {
    contactStart: Date;
} & User & Person

// const user1: Employee = {
// }

type Developer = {
    skills: string[];
    level?: 'junior' | 'middle' | 'senior'
    say(): void;
    code?: (arg: string) => string;
}

