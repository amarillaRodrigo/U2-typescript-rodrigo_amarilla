"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car = require("../punto_9/privateProperty");
class ElectricCar extends Car {
    batteryLife;
    constructor(make, batteryLife) {
        super(make);
        this.batteryLife = batteryLife;
    }
    charge() {
        console.log("Charging");
    }
}
let myElectricCar = new ElectricCar("Tesla", 100);
myElectricCar.drive();
myElectricCar.charge();
//# sourceMappingURL=classInheritance.js.map