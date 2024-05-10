class Box<T> {
    private elements: T[] = []

    public add(element: T): void {
        this.elements.push(element)
    }

    public remove(): void {
        this.elements.pop()
    }

    get count(): number {
        return this.elements.length
    }
}

let box = new Box<number>()
box.add(1)
box.add(2)
box.add(3)
console.log(box.count)

let box2 = new Box<string>()
box2.add("Pesho")
box2.add("Gosho")
console.log(box2.count)
box2.remove()
console.log(box2.count)
