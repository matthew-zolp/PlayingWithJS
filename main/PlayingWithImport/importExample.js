//Note that the double dots here indicates that the import just reference a folder one higher in the folder tree
//than this file's location. Also called the parent directory. Double dots can be used multiple times to reference
//directories multiple levels above their location. Not application to LWC development, as the c/ prefix is used to
//import functions from other components within the lwc folder tree.
import * as myLib from '../PlayingWithArrays/PlayingWithArrays.js';

const product = myLib.multiplyAllNumbers(1,2,3,4,5);
console.log(`Product: ${product}`);



//Loading dynamically on demand example

function multiplyAll(){
    import('../PlayingWithArrays/PlayingWithArrays.js')
    .then((module) => {
    
    var number = module.multiplyAllNumbers(1,2,3,4,5);
    console.log(`Product: ${JSON.stringify(number)}`);

     });

}

multiplyAll();