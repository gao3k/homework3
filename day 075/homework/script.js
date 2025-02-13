class Data {
    constructor(value) {
        this.value = value;
    }

    process() {
        return `Processing ${this.value}`;
    }
}

class Data1 extends Data {
    process() {
        return `Data1 processing ${this.value}`;
    }
}

class Data2 extends Data {
    process() {
        return `Data2 processing ${this.value}`;
    }
}

class Data3 extends Data {
    process() {
        return `Data3 processing ${this.value}`;
    }
}

class Data4 extends Data {
    process() {
        return `Data4 processing ${this.value}`;
    }
}

class Data5 extends Data {
    process() {
        return `Data5 processing ${this.value}`;
    }
}

class Data6 extends Data {
    process() {
        return `Data6 processing ${this.value}`;
    }
}

class Data7 extends Data {
    process() {
        return `Data7 processing ${this.value}`;
    }
}

// Using the classes
const data1 = new Data1("example1");
console.log(data1.process());

const data2 = new Data2("example2");
console.log(data2.process());
