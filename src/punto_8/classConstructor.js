"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
    drive() {
        console.log(`Driving a ${this.make}`);
    }
}
let myCar = new Car("Yaris GR");
myCar.drive();
//# sourceMappingURL=classConstructor.js.map