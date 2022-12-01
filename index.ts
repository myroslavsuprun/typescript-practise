let age: number;

age = 50;

let nameString: string;

nameString = "Max";

let toggle: boolean;

toggle = true;

let empty: null;

empty = null;

let notInitialize: undefined;

let callback: (a: number) => number;

callback = (a) => 100 + a;

let anything: any;

anything = "text";
anything = {};

// ----------------------------------------------

let some: unknown;
some = "text";

let str: string;


if (typeof some === "string") {
    str = some;
}

// ----------------------------------------------

let person: [string, number];

person = ["Max", 21];

// ----------------------------------------------

enum Status { LOADING, READY };

const page = {
    load: Status.READY;
}

if (page.load === Status.LOADING) {
    console.log('loading');
} else if (page.load === Status.READY) {
    console.log('Ready');
}


// ----------------------------------------------

let variable: string | number;

variable = "string";
variable = 1;

let btnStatus: 'enable' | 'disable';

function message(message: string): void {
    console.log(message);  
};

function calc(num1: number, num2: number): number {
    return num1 + num2;
};

function customError(): never {
    throw new Error('Error');
};

type page = {
    title: string;
    likes: number;
    accounts?: string[];
    status: 'close' | 'open';
    details?: {
        createAt: Date;
        updateAt: Date;
    }
}

const page1: page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}

const page2: page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
}

console.log(new Date('2021-01-01'));