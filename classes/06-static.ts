export class Circle {
    protected static pi: number = 3.14;

    constructor(public radius: number) {}


    private static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    get area(): number {
        return Circle.pi * this.radius * this.radius;
    }
}

const c1 = new Circle(20);
c1.radius;
c1.area;
// Circle.pi;
// Circle.calculateArea(25);

class Elipse extends Circle {
    constructor(public radius: number) {
        super(radius);
        Circle.pi;
    }
}