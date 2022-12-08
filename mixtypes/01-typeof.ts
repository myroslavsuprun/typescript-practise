import { average } from '../basic/02-functions';

// console.log(typeof 'stasdsadg');

let str = 'Hello world1';

type X = typeof str;

type Fn = typeof average;

const max: Fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3, 4, 5, 6, 7, 8, 9, 33);

type returnFn = ReturnType<Fn>;
 