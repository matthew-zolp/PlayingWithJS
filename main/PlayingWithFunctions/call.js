//Use the call function to set inherited properties on children, and modify parent functions with custom return values
function Mascot(name) {
    this.name = name;
  }
  
  Mascot.prototype.getGreeting = function () {
    return `Hi, my name is ${this.name}.`;
  }
  
  function Owl(name, sound) {
    Mascot.call(this,name);//Set inherited property from Mascot
    this.sound = sound;
  }
  
 Owl.prototype = Object.create(Mascot.prototype);//Sets the owl prototype to be a child of Mascot
  Owl.prototype.getGreeting = function () {//Specify the prototype of the getGreeting function to override the default Mascot method
    let greeting = Mascot.prototype.getGreeting.call(this);//Call the greeting function on Mascot within the Owl prototype of getGreeting
    return `${greeting} I ${this.sound}!`;//Add custom greeting specifically for the Owl object
  }
  
  const myOwl = new Owl('Hootie', 'hoot');
  const exGreeting = myOwl.getGreeting();
  
  console.log(exGreeting);