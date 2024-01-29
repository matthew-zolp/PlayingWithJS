function spliceArray(array) {
    for (let val of array){
        if (val === 3) {
            array.push('three');//Add three to the end of the array
            console.log(JSON.stringify(array));
        }
    }
    array.splice(1,1);//At index 1, remove 1 element
    console.log(JSON.stringify(array));
    array.splice(2,3,[4,5,6]);//At index 2 remove 3 successive elements, and insert value 'four'
    console.log(JSON.stringify(array));
}

spliceArray(['one',1,'two',2,3,4]);