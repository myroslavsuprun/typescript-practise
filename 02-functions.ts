function sum(a: number, b: number): number {
    return a + b;
}

const sum2 = (a: number, b: number): number => a + b;

const sum3 = function (a: number, b: number): number {
    return a + b;
}

sum(2, 2);

// Если функция завершится
function log(name: string, userId?: string): void {
    console.log(name)
    console.log(userId ?? 'no id provided')
} 

// Если функция никогда не закончится
function crash(): never {
    throw new Error('crash');
}

function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)

    return sum / nums.length ;
}