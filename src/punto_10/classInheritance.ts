import Car = require("../punto_9/privateProperty");

class ElectricCar extends Car {
    batteryLife: number;
    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }
    
    charge(): void {
        console.log("Charging");
    }
}

let myElectricCar = new ElectricCar("Tesla", 100);
myElectricCar.drive();
myElectricCar.charge();
