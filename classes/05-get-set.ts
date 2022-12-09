export class Rectangle {
    constructor(public width: number, public height: number) {}

    get area(): number {
        return this.height * this.width;
    }
}

const rect1 = new Rectangle(20, 21);
rect1.area;

export class Car {
    // using underscore, so we would be able to create a maxSpeed method Class member
    constructor(public color: string, private _maxSpeed: number) {
    }

    get maxSpeed(): number {
        return this.maxSpeed;
    }

    set maxSpeed(speed: number) {
        if (speed > 0) {
            this.maxSpeed = speed;
        }
    } 
}

const c1 = new Car('green', 60);
c1.maxSpeed = 20;
c1.maxSpeed;