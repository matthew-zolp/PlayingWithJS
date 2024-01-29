let car = {
    name: 'Corvette',
    topSpeed: 200
};

delete car.topSpeed;
console.log(JSON.stringify(car));

class Car {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
}

let car2 = new Car('Aston Martin', 220);

delete car2.topSpeed;

console.log(JSON.stringify(car2));

function Car2(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
}

let car3 = new Car2('Subaru',150);

delete car3.topSpeed;

console.log(JSON.stringify(car3));

let car4 = Object.create(null);
car4.name = 'Ford';
car4.topSpeed = 120;

delete car4.topSpeed;

console.log(JSON.stringify(car4));

