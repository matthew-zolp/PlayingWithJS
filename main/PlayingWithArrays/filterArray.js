let objectArray = [  {
    "color": "red",
    "type": "minivan",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "white",
    "type": "semi",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "red",
    "type": "sedan",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "red",
    "type": "convertible",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "red",
    "type": "suv",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },  {
    "color": "yellow",
    "type": "truck",
    "registration": new Date('2018-03-05'),
    "capacity": 5
  },  {
    "color": "blue",
    "type": "coupe",
    "registration": new Date('2018-03-05'),
    "capacity": 5
  }];

  function filterVehicles(data) {
    let badDate = new Date('2018-03-03');
    return data.filter(vehicle => vehicle.registration.getTime() !== badDate.getTime() && vehicle.type == 'truck').map(vehicle => `${vehicle.color} - ${vehicle.type}`);
  }


  console.log(filterVehicles(objectArray));