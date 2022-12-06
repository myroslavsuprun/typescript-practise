// Array<sting>
// string[]
// Promise<number>

type TypeFactory<T> = T;

type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

function toArray<T>(...arg: T[]): T[] {
    return arg;
}

toArray<number>(1, 2, 3)
toArray("as", "asd")

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
    return value[0];
}

head([12, 123])

interface ModelData<T> {
    title: string;
    value: T;
}

const obj1: ModelData<number> = {
    title: 'asd',
    value: 12,
}

const obj2: ModelData<Array<number>> = {
    title: '1233asd',
    value: [213,12313,13123],
}

const head1 = <T>(value: T[]): T => value[0];

export {}