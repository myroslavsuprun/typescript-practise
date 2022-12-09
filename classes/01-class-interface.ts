interface ICar {
    go(speed: number): void;
}

export class Car implements ICar {
    go(speed: number) {
        console.log("Let us go at ", speed.toFixed());
    }

    stop() {
        console.log('stopped');
    }
}

const car = new Car;

car.go(12)