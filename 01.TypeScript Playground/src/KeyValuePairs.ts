class KeyValuePair<T, U> {
    private key: T | undefined
    private value: U | undefined

    setKeyValue(key: T, value: U) {
        this.key = key
        this.value = value
    }

    display() {
        console.log(`Key: ${this.key}, Value: ${this.value}`)
    }
}


let kvp = new KeyValuePair<number, string>()
kvp.setKeyValue(1, "Steve")
kvp.display()
