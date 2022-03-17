class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = []; // Overriding inside extends classes

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // this.id = 'd2'; -> ERROR readonly
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// INHERITANCE
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            this.addReport(value);
        }
        throw new Error('Pleas pass in a valid value');
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Test') {
            return;
        }
        this.employees.push(name);

    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log(this.reports);
    }
}

// Static
const employee1 = Department.createEmployee('Patrick');
console.log(employee1);

const it = new ITDepartment('d2', ['Test']);
console.log(it);

const account = new AccountingDepartment('d3', []);
account.addReport('Testing..');
account.getReports();

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Patrick');
accounting.addEmployee('Test');
// accounting.employees[2] = 'New'; // ERROR -> Privare

accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();