abstract class Employee {
    name: string
    age: number
    salary: number
    tasks: Array<string>

    protected constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.salary = 0
        this.tasks = []
    }

    work(): void {
        const currentTask = this.tasks.shift()
        if (currentTask) {
            this.tasks.push(currentTask)
            console.log(this.name + currentTask)
        }
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }

    getSalary(): number {
        return this.salary
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)

        this.tasks.push(" is working on a simple task.")
    }

}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(" is working on a complicated task.")
        this.tasks.push(" is taking time off work.")
        this.tasks.push(" is supervising junior workers.")
    }
}

export class Manager extends Employee {
    dividend: number

    constructor(name: string, age: number) {
        super(name, age)
        this.dividend = 0
        this.tasks.push(" scheduled a meeting.")
        this.tasks.push(" is preparing a quarterly meeting.")
    }

    public getSalary(): number {
        return this.salary + this.dividend
    }
}

const john = new Junior("John", 36)
john.salary = 1000
console.log(john)
john.work()
john.collectSalary()

const peter = new Manager("Peter", 45)
peter.salary = 2000
peter.dividend = 500
console.log(peter)
peter.work()
peter.work()
peter.collectSalary()

const david = new Senior("David", 53)
david.salary = 5000
console.log(david)
david.work()
david.work()
david.work()
david.collectSalary()
