// keyof operator

type WindowProp = keyof Window;

const myValue: WindowProp = 'ontoggle';

interface PC {
    brand: string;
    year: number;
}

type Typ1 = keyof PC; // brand | year;

const val1: Typ1 = 'year';

type Tup1 = keyof [string, number, boolean];

const val2: Tup1 = '2';
