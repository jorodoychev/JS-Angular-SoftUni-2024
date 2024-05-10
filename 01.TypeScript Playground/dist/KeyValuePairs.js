"use strict";
class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
//# sourceMappingURL=KeyValuePairs.js.map