function fromPair(pair: [string, string]) {
    const [key, value] = pair;

    return {
        [key]: value,
    }
}

type FirstArg<T> = T extends (first: infer First , ...args: any[]) => any ? First : never;

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue'];

fromPair(myPair);

type ConstuctorFirstArg<T> = T extends { new(arg: infer A, ...args: any[]): any } ? A : never;

class Computer {
    constructor(brand: string) {}
}

let brand: ConstuctorFirstArg<typeof Computer> = '';

let dateArg: ConstuctorFirstArg<typeof Date>;

export { };