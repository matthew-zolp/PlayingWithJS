//Option 1: Object Literal
let dog = {
    name: 'Fido',
    type: 'Basset Hound',
    color: 'Brown'
};

//Object 2: Class Declaration
class Dog {
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

//Option 3: Constructor Function
function functionalDog(name,type,color){
    this.name = name;
    this.type = type;
    this.color = color;
}

//Option 4: Object.create()
let newDog = Object.create(null);
newDog.name = 'Fido';
newDog.type = 'Labrador';
newDog.color = 'Yellow';

console.log(JSON.stringify(dog));
console.log(JSON.stringify(new Dog('Jax','Golden Retriever','Gold')));
console.log(JSON.stringify(new functionalDog('Clifford','Big Red Dog', 'Red')));
console.log(JSON.stringify(newDog));

