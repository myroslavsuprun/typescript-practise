interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;

    [key: string]: unknown;
}

// опциональные после обязательных

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
    isNew: false,
}

const car2: Car = {
    brand: 'Mercedes',
    type: 'hatchback',
    wheels: 4,
}


// для опциональных ключей, как правило, пишут так:
car["go"] = true;

