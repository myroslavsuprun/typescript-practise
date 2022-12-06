export function prop<T>(key: keyof T, obj: T): T[keyof T] {
    return obj[key];
}

// interface Laptop {
//     brand: string;
// }

// type F = Laptop["brand"];


const obj1 = { a: 1, b: 2, c: 3 }
prop("a", obj1);

// prop('d', obj1);