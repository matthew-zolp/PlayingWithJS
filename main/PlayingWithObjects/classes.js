class Vehicle {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.currentSpeed = 0;
    }
    accelerate(speed){
        this.currentSpeed += speed;
    }
    decelerate(speed){
        this.currentSpeed -= speed;
    }
}
class Truck extends Vehicle{
    constructor(name,color){
        super(name,color);
        this.burnout = false;
        this.driversSeatRecline = 90;
        this.frontPassengerRecline = 90;
    }
    doBurnout(){
        this.burnout = !this.burnout;
    }
    onOffWipers(){
        this.wipers = !this.wipers;
    }
    doRecline(degrees, seat){
        seat === 'DriversSeat' ? this.driversSeatRecline = degrees : this.frontPassengerRecline = degrees; 
    }

}

class Motorcycle extends Vehicle{
    constructor(name,color){
        super(name,color); /////IMPORTANT!!! Always call super constructor in the first line
                           // if accessing this keyword in a child class constructor
        this.wheelie = false;
    }
    doWheelie(){
        this.wheelie = !this.wheelie;
    }
}

var truck = new Truck('Tacoma','Blue');
console.log(JSON.stringify(truck));
truck.accelerate(60);
console.log(JSON.stringify(truck));
truck.decelerate(15);
console.log(JSON.stringify(truck));
truck.doBurnout();
console.log(JSON.stringify(truck));
truck.onOffWipers()
console.log(JSON.stringify(truck));
truck.onOffWipers();
console.log(JSON.stringify(truck));
truck.doBurnout();
console.log(JSON.stringify(truck));
truck.doRecline('120', 'DriversSeat');
console.log(JSON.stringify(truck));
truck.doRecline('150', undefined);
console.log(JSON.stringify(truck));

var motorcycle = new Motorcycle('Suzuki GSXR', 'Red');
console.log(JSON.stringify(motorcycle));
motorcycle.accelerate(120);
console.log(JSON.stringify(motorcycle));
motorcycle.doWheelie();
console.log(JSON.stringify(motorcycle));


