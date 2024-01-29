//Imported variables are treated as constants. In order to modify them, you must also import a
//function designed to do so.
import {count, incrementCount} from '../PlayingWithExports/PlayingWithExports.js';

console.log(count);
incrementCount();
console.log(count);
incrementCount();
incrementCount();
incrementCount();
console.log(count);
//This will throw an error
count++;