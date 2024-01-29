class Sword{
    constructor(name,strength,size){
        this.name = name;
        this.strength = strength;
        this.size = size;
    }
}

let firstSword = new Sword('Gildemeer', 500, 26);
Object.freeze(firstSword); //Cannot change/remove existing properties or add new properties or change the prototype of the object
//TypeError: Cannot assign to read only property 'size' of object '#<Sword>'
firstSword.size = 25;

let secondSword = new Sword('Kaladash', 345, 12);
Object.seal(secondSword);// Prevents new properties from being added, but existing properties can be changed as long as those properties are writeable
//Existing properties cannot be removed
//TypeError: Cannot add property type, object is not extensible
secondSword.type = 'Katana';

let thirdSword = new Sword('Jaeger', 456, 55);
Object.preventExtensions(thirdSword);//Prevents new properties from being added.
//TypeError: Cannot add property type, object is not extensible
thirdSword.type = 'Longsword';