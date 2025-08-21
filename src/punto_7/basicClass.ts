class Car {
    make: string = ""

    drive(): void {
        console.log(`Driving a ${this.make}`);
        
    }

}

let myCar = new Car();
myCar.make = "Yaris GR";
myCar.drive();

