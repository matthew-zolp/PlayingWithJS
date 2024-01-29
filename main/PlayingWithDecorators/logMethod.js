  function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value; // Save the original method
  
    // Redefine the method with custom behavior
    descriptor.value = function (...args) {
      console.log(`Before ${key} is called`);
      const result = originalMethod.apply(this, args);
      console.log(`After ${key} is called`);
      return result;
    };
  
    return descriptor;
  }
@logMethod
class Example {
    @logMethod
    greet() {
      console.log("Hello, world!");
    }
  }

  
  const example = new Example();
  example.greet();

  function measureTime(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`Execution time for ${key}: ${end - start} milliseconds`);
      return result;
    };
    return descriptor;
  }
  
  class Timer {
    @measureTime
    heavyComputation() {
      // Simulate a heavy computation
      for (let i = 0; i < 1000000000; i++) {}
    }
  }
  
  const timer = new Timer();
  timer.heavyComputation(); // Logs execution time


  function logger(target, name, descriptor) {
    const func = descriptor.value;
    descriptor.value = function (...args) {
      console.log(`Arguments are ${JSON.stringify(args)}`)
      func(...args);
    }
    return descriptor;
  }
  
  
  //The logger has been implemented in the class as shown below.
  class User {
    @logger
    getUser(id) {
      //Method implementation
    }
  
    @logger
    saveUser(user) {
      //Method implementation
    }
  }
  

  let user1 = new User();

  getUser(1);