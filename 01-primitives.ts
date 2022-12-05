// numbers

let x = 10.5;

// let y = 1234n;

let z = NaN;

// string

let str1: string = 'asd';

let symb = Symbol('as');

// Boolean
let o = true;

o = false;

// nothing
let h: undefined = undefined;

let g: null = null;

// literal

const num = 10912;
const str2 = 'string is here';

// universal
// тип крайнего случая

let mm: any = 1;

mm = [];
mm = 'string';

// unknown
let xx: unknown = 2;

// можем использовать только с type Guard при unknown
if (typeof xx === 'string') {
    xx.toLowerCase();
}

