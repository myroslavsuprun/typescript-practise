function len<T extends {length: number}>(arg: T) {
    return arg.length;
}

len("string");
len(['abc']);
len({ length: 12 })
// len(123);
// len(true);
// len({ a: 1 });

