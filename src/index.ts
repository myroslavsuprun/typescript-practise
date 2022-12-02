class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}


abstract class House {
    protected door = false;
    private tentants: Person[] = [];
    
    constructor(protected key: Key) {
        this.key = key;
    }

    public comeIn(person: Person): void {
        if (!this.door) {
            throw new Error('The door is shut');
        }

        this.tentants.push(person);
        console.log('You have successfully come in');
    }

    abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    public openDoor(key: Key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("The key hasn't matched");
        }
        return this.door = true;
    }
}



const key = new Key();
const myHouse = new MyHouse(key);
const person = new Person(key);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);