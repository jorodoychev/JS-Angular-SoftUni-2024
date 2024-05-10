"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = void 0;
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        const currentTask = this.tasks.shift();
        if (currentTask) {
            this.tasks.push(currentTask);
            console.log(this.name + currentTask);
        }
    }
    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
        return this.salary;
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(" is working on a simple task.");
    }
}
exports.Junior = Junior;
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}
exports.Senior = Senior;
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }
    getSalary() {
        return this.salary + this.dividend;
    }
}
exports.Manager = Manager;
const john = new Junior("John", 36);
john.salary = 1000;
console.log(john);
john.work();
john.collectSalary();
const peter = new Manager("Peter", 45);
peter.salary = 2000;
peter.dividend = 500;
console.log(peter);
peter.work();
peter.work();
peter.collectSalary();
const david = new Senior("David", 53);
david.salary = 5000;
console.log(david);
david.work();
david.work();
david.work();
david.collectSalary();
//# sourceMappingURL=Employee.js.map