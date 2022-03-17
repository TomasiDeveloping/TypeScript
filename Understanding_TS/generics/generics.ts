const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done !')
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})

// Generic Function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Patrick'}, {age: 38});
console.log(mergedObj.name);

// Another Generic Function

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
        
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

// Keyof

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Patrick'}, 'name'));

// Genberic Classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Patrick');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);

// Generic Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const newNames: Readonly<string[]> = ['Patrick', 'Test'];
// newNames.push('new');
