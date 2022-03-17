// *******************
// INTERSECTION TYPES
// ********************

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Patrick',
    privileges: ['create-server'],
    startDate: new Date()
};

// TYPE GUARDS

type Combine = string | number;

function add(a: Combine, b: Combine) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknowedEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowedEmployee) {
    console.log('Name ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({name: 'Patrick', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
};

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(Vehicle: Vehicle) {
    Vehicle.drive();
    if (Vehicle instanceof Truck) {
        Vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// **********************
// DISCRIMINATED UNIONS
// **********************

interface Bird {
    type: 'bird';
    flyingSpeed: number;
};

interface Horse {
    type: 'horse';
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// *****************
// TYPE CASTING
// *****************

// const userElementInput = <HTMLInputElement>document.getElementById('user-input')!; -> VERSION 1
const userElementInput = document.getElementById('user-input')! as HTMLInputElement;

userElementInput.value = 'Hi there!';

// *****************
// INDEX PROPERTIES
// ******************

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
    [prop: string]: string;
};

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    userName: 'Must start with a capital character!'
};

// *********************
// FUNCTION OVERLOADS
// *********************

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combine, b: Combine)
 {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
}

// *******************
// OPTIONAL CHAINING
// *******************

const fetchedUserDate = {
    id: 'u1',
    name: 'Patrick',
    job: {title: 'CEO', description: 'Owner'}
};

console.log(fetchedUserDate?.job?.title);

// ********************
// NULLISH COALESCING
// *********************

const userFrontInput = '';
const userFrontInput2 =  null;


const storedData = userFrontInput ?? 'DEFAULT';
const storedData1 = userFrontInput2 ?? 'DEFAULT';

console.log(storedData);
console.log(storedData1);