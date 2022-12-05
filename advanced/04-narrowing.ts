function example1(x?: number | string) {
    if (typeof x === "string") {
        x.toUpperCase();
    } else if (typeof x === 'number') {
        x.toFixed();
    } else if (!x) {
        console.log('no value provided')
    } else {
        x
    }
}

function example2(strs: string | string[] | null) {
    // if (typeof strs === "object") {}

    if (Array.isArray(strs)) {
        strs.concat([]);
    } else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}

// instanceof operator
export function example3(x: number[] | Date) {
    if (x instanceof Date) {
        x.getFullYear();
    } else {
        x.concat([]);
    }
}

type Fish = { swim: () => void };

type Bird = { fly: () => void };

// in operator
function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim();
    } 
    return animal.fly();
}