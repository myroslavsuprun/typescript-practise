enum ShapeKind {
    Circle = 1,
    Square = 2,
}

const myShape = ShapeKind.Circle;

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

const circle1: Circle = {
    radius: 2,
    kind: 1,
}

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior',
}

interface Dev {
    login: string;
    level: Grades;
    skills: string[];

}

const dev2: Dev = {
    level: Grades.Junior,
    login: 'Michey',
    skills: ["HTML", "CSS", "JS"],
}

function upgrade(user: { level: Grades }) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    } else {
        user.level = Grades.Senior;
    }
}
