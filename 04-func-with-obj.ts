function printPoint(point: { x: string, y: string }): void {
    console.log('Coordinate of the point is x:', point.x, point.y);
}

const obj1 = {
    x: '1',
    y: '2',
}

printPoint(obj1);

const obj2 = {
    x: '1',
    y: '2',
    z: '4',
}

printPoint(obj2);

// в функции могут быть сколько угодно ключей добавлены опционально

function printName(user: { firstName: string, lastName?: string }): void {
    console.log(user.firstName.toLowerCase());

    // type guard, чтобы не было ошибки
    if (user.lastName) {
        console.log(user.lastName.toLowerCase())
    }
}

printName({
    firstName: 'Myroslav',
})

printName({
    firstName: 'Myroslav',
    lastName: 'Remember',
})