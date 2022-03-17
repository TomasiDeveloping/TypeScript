interface Greetable {
    name: string;
    outputName?: string; // Optional

    greet(phrase: string): void;
};

class Person implements Greetable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

const user1 = new Person('Patrick');
user1.greet('Hi there I am');

interface AddFn {
    (a: number, b: number): number;
};

let calc: AddFn;

calc = (n1: number, n2: number) => {
    return n1 + n2;
};

console.log(calc(2, 5));