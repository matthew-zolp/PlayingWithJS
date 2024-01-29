let array1 = [1,2,3,4,5,6];
let array2 = ['a','b','c','d','e','g'];

function concatArrays(array1,array2){
    console.log('Using concat(): ' + JSON.stringify(array1.concat(array2)));
    console.log('Using spread: '   + JSON.stringify([...array1,...array2]));
    console.log('Using flat(): '   + JSON.stringify([array1,array2].flat()));
}

concatArrays(array1,array2);