"use strict";
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
    drive() {
        console.log(`Driving a ${this.make}`);
    }
    getMake() {
        return this.make;
    }
}
const myCar = new Car("Yaris GR");
myCar.drive();
console.log(myCar.getMake());
module.exports = Car;
//# sourceMappingURL=privateProperty.js.map