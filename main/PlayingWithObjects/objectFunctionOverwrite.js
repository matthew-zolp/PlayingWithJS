//The value “[object Object]” will be printed by default when an object is implicitly coerced to a string. 
//Due to the toString method, the object automatically inherits from the Object prototype. 
//The toString method in the two user objects above will override the default toString method.
//Furthermore, the valueOf method is also overridden in userObj2.';
//Numeric conversion is triggered by the + operator by default. This numeric conversion is done with the help 
//of the valueOf method. If the valueOf method is not present, the toString method will be used for string 
//conversion. The userObj1 object only contains the toString method, and hence the overridden toString method 
//was invoked by the + operator. The userObj2 object contains both the valueOf and toString methods, and 
//hence the + operator called the valueOf method to invoke a numeric conversion.
//

const userObj1 = {
    id: 1,
    name: "Carlos",
    toString: function () {
      return `[User id:${this.id}][User name:${this.name}]`;
    },
  };
  const userObj2 = {
    id: 2,
    name: "Luis",
    toString: function () {
      return `[User id:${this.id}][User name:${this.name}]`;
    },
    valueOf: function () {
      return this.id;
    },
  };
  
  //The developer has initialized an array with the two objects above and iterates the array with a forEach loop as shown below.
  
  let userArray = new Array(userObj1, userObj2);
  userArray.forEach((user, index) => {
    console.log("[index=" + index + "]" + user);
    //implementation here
  });
  