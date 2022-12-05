
type Fish = { swim: () => void };

type Bird = { fly: () => void };

// is operator
function isFish(pet: Fish | Bird): pet is Fish {
    return true;
}

// in operator
function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim();
    } 
    return animal.fly();
}

export function isNull(val: any): val is null {
    return !val;
}

const empty = "";
const zero = 0;

if (isNull(empty)) {
    empty;
}