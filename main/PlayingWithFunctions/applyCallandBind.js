//Apply and Call can be used to bind properties to a function


let greeting = {
    morningGreet: 'Welcome, and Good Morning!',
    eveningGreet: 'Welcome, and Good Evening!',
    getGreeting(gTime) {
      if (gTime === 'morningGreet' || gTime === 'eveningGreet') {
        console.log('Values for morningGreet and eveningGreet have been substituted by the call method' + '\n' + JSON.stringify(this));
        return this[gTime];
      }
      return 'Welcome!';
    }
  };
  let substituteGreeting = {
    morningGreet: 'We apologize that our site is down this morning.',
    eveningGreet: 'We apologize that our site is down this evening.'
  }
  
  //The showGreeting function is used to show the greeting.
  function showGreeting(theTime) {
    const greet = greeting.getGreeting.call(substituteGreeting, theTime); // Replace this line of code to use substituteGreeting
    console.log(JSON.stringify(greet));
  };

  showGreeting('morningGreet');
  


  //Showcasing the bind() function

  const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log('Unbound reference to function in the global scope: ' + JSON.stringify(unboundGetX)); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = module.getX.bind(module);
  console.log('When bound, function is invoked within the scope of the function it was bound to: ' +  boundGetX());
  // Expected output: 42


  //another example
  "use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
const boundLog3 = boundLog2.bind("newest this value", 7,8,9,10);
boundLog3(11,12); // "this value", 1, 2, 3, 4, 5, 6

///////////////////////////////////////////////////////////////////////////////////////////////

