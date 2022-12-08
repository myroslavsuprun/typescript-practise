const numbers = [1, 2, 3, 4];

const strs: string[] = [];
const strs2: Array<string> = [];


const cars: Array<any> = [];

cars.push({ brand: 'Audi', wheels: 3, type: '' });

const arrOfArray: string[][][] = [];

arrOfArray.push([[''], [''], ['']])

export function printArr(arr: unknown[]): void {
    arr.forEach((el, index) => {
        console.log(el, index);
    })
}