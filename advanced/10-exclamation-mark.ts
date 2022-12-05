let word: string | null = null;

if (num > 5) {
    word = 'abc';
}

console.log(word!.toLowerCase());

function printName(name?: string) {
    const fullName: string = name!;
};

interface Person {
    name: string;
    age: number;
    sex: 'female' | 'male';
 }

function printName2(person?: Person) {
    console.log(person!.name);
}


const people: Person[] = [
]

