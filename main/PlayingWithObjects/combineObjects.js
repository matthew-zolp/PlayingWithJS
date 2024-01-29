class Car{
    constructor(name, make, model){
        this.name = name;
        this.make = make;
        this.model = model;
    }
}

class Owner{
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

let car = new Car('Maximus','Ford', 'F350');
let owner = new Owner('Jordan', 'Male', 35);

let carAndOwner = Object.assign({}, owner, car);


//Notice how the name property in the output object is overwritten by the name of the car instead of the owner
//This is because the .assign function will give preference to the newObj parameter if there are
//shared properties. Function definition --> Object.assign({}, oldObj, newObj)
console.log(JSON.stringify(carAndOwner));