"use strict";
class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        this.currentIndex = 0;
    }
    morph() {
        const element = this.elements[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
        return element;
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.elements[this.currentIndex]}\nSort: ${this.melonSort}\nElement Index: ${this.currentIndex}`;
    }
}
let watermelon = new Watermelon(12.5, 'Kingsize');
let melo = new Melolemonmelon(10, 'Bigsize');
console.log(watermelon.toString());
console.log(melo.morph());
console.log(melo.morph());
console.log(melo.morph());
console.log(melo.morph());
console.log(melo.toString());
//# sourceMappingURL=Elemelons.js.map