const path = require('path');
const file = '/Users/621639/DX/PlayingWithJS/exampleText.txt'

const dir = path.parse(file).dir;
console.log('path.parse(file): ' + dir);
const dir1 = path.dirname(file);
console.log('path.dirname(file): ' + dir1);

//Get the parent directory of a certain file