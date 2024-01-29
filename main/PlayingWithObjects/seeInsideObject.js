class Location {
    constructor(latitude, longitude, name){
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
    }
}

let beach = new Location(55.1,109.6,'Shadow Lake Beach');

console.log(Object.entries(beach));

for(let prop in beach){
    console.log(`${prop} ->${beach[prop]}`);
}