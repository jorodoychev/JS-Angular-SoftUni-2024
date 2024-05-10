"use strict";
class Box {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
    remove() {
        this.elements.pop();
    }
    get count() {
        return this.elements.length;
    }
}
let box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
let box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
//# sourceMappingURL=Box.js.map